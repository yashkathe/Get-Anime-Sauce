import React, { useState, useContext, useMemo, useEffect } from "react";

import folderIcon from "../../assets/folder.png";
import urlIcon from "../../assets/url.png";
import clearIcon from "../../assets/clear.png";
import { motion } from "framer-motion";

import ReceivedResult from "../Result/ReceivedResult";
import Spinner from "../../UI/Spinner";

import classes from "./UploadForm.module.css";
import Errormsg from "../Errormsg";
import useHttp from "../../Hooks/use-http";
import VarientsContext from "../../store/varients-store";
import ImageResponse from "./ImageResponse";

const UploadForm = () => {
    const ctx = useContext(VarientsContext);

    //state for assigning css classes
    const [isUrl, setIsUrl] = useState(true);

    const urlHandlerTrue = () => {
        setIsUrl(true);
    };
    const urlHandlerFalse = () => {
        setIsUrl(false);
    };

    const getPhotoHandler = (event) => {
        setGetImage(event.target.files[0]);
    };
    const getUrlHandler = (event) => {
        setGetUrl(event.target.value);
    };
    const clearInputHandlerBtn = () => {
        setGetUrl("");
    };

    //calling the hook
    const {
        isLoading,
        dataFetched,
        setDataFetched,
        error,
        getUrl,
        setGetUrl,
        setError,
        getImage,
        setGetImage,
        receivedData,
        sendRequest: fetchHandler,
    } = useHttp();

    const fetchUrl = async () => {
        fetchHandler({
            url: `https://api.trace.moe/search?anilistInfo&url=${encodeURIComponent(
                `${getUrl}`
            )}`,
            isHookUrl: { isUrl },
        });
    };

    const fetchImage = async () => {
        const formData = new FormData();
        formData.append("image", getImage);

        fetchHandler({
            url: "https://api.trace.moe/search?anilistInfo",
            method: "POST",
            body: formData,
            isHookUrl: { isUrl },
        });
    };

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (isUrl === true) {
            if (getUrl) {
                setIsDisabled(false);
            } else {
                setIsDisabled(true);
            }
        } else if (isUrl === false) {
            if (getImage) {
                setIsDisabled(false);
            } else {
                setIsDisabled(true);
            }
        }
    }, [isUrl, getUrl, getImage]);

    return (
        <React.Fragment>
            <div className={classes.altButtons}>
                {/* add folder button  */}
                <div>
                    <input
                        type='file'
                        name='imageUpload'
                        id='input'
                        accept='image/*'
                        className={classes.fileInput}
                        onChange={getPhotoHandler}
                        onClick={urlHandlerFalse}
                    />
                    <label htmlFor='input'>
                        <motion.img
                            className={`${classes.optButton} ${
                                !isUrl && classes.optButtonActive
                            }`}
                            src={folderIcon}
                            whileHover={ctx.hoverBtn}
                            whileTap={ctx.tap}
                            alt='folder Icon'
                        ></motion.img>
                    </label>
                </div>

                {/* url insert button  */}
                <div>
                    <motion.button
                        onClick={urlHandlerTrue}
                        whileHover={ctx.hoverBtn}
                        whileTap={ctx.tap}
                    >
                        <img
                            className={`${classes.optButton} ${
                                isUrl && classes.optButtonActive
                            }`}
                            src={urlIcon}
                            alt='attachment chain Icon'
                        ></img>
                    </motion.button>
                </div>
            </div>

            {/* <ImageResponse src={isUrl ? getUrl : getImage}/> */}
            <ImageResponse getImage={getImage} getUrl={getUrl} isUrl={isUrl} />

            {/* input for url */}
            <div className={classes.urlDiv}>
                <motion.input
                    className={`${classes.urlInput} ${
                        !isUrl && classes.cancel
                    }`}
                    placeholder='Image URL'
                    whileFocus={ctx.urlFocus}
                    onChange={getUrlHandler}
                    value={getUrl}
                />
                <button
                    className={classes.inputClearBtn}
                    onClick={clearInputHandlerBtn}
                >
                    <img src={clearIcon} alt='clear'></img>
                </button>
            </div>

            {/* submit button */}
            <div className={classes.submit}>
                <motion.button
                    disabled={isDisabled}
                    type='submit'
                    onClick={isUrl ? fetchUrl : fetchImage}
                    variants={!isDisabled ? ctx.submitBtnAnimate : null}
                    whileHover='hover'
                >
                    Submit
                </motion.button>
            </div>

            {/* spinner, gotError msg, result*/}

            {isLoading === true && <Spinner />}
            <Errormsg gotError={error} setError={setError} isUrl={isUrl} />
            <ReceivedResult
                items={useMemo(() => {
                    return receivedData;
                }, [receivedData])}
                isLoading={isLoading}
                dataFetched={dataFetched}
                error={error}
                setDataFetched={setDataFetched}
                setGetImage={setGetImage}
            />
        </React.Fragment>
    );
};

export default UploadForm;
