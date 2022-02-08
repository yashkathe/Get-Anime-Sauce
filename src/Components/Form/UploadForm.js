import React, { useState } from "react";

import folderIcon from "../../assets/folder.png";
import urlIcon from "../../assets/url.png";
import { motion } from "framer-motion";

import ReceivedResult from "../Result/ReceivedResult";
import Spinner from "../../UI/Spinner";

import classes from "./UploadForm.module.css";
import Errormsg from "../Errormsg";
import useHttp from "../../Hooks/use-http";

// variants
const hover = {
    rotate: [0, -18, 18, -18, 18, 0],
};

const tap = {
    scale: 1.5,
};

const urlFocus = {
    scale: 1.2,
    borderBottom: "3px solid black",
    boxShadow: "0 4px 6px rgba(0,0,0,0.5)",
    transition: {
        type: "spring",
        duration: 0.1,
    },
};

const submitBtnAnimate = {
    hover: {
        scale: 1.1,
        boxShadow: "1px 1px 10px rgba(0,0,0,0.5)",
        transition: {
            type: "tween",
        },
    },
};

const UploadForm = () => {
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
                            whileHover={hover}
                            whileTap={tap}
                            alt='folder Icon'
                        ></motion.img>
                    </label>
                </div>

                {/* url insert button  */}

                <div>
                    <motion.button
                        onClick={urlHandlerTrue}
                        whileHover={hover}
                        whileTap={tap}
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

            {/* rest of the form : input for url and submit button */}

            <div className={classes.urlDiv}>
                <motion.input
                    className={`${classes.urlInput} ${
                        !isUrl && classes.cancel
                    }`}
                    placeholder='Image URL'
                    whileFocus={urlFocus}
                    onChange={getUrlHandler}
                    value={getUrl}
                />
            </div>
            <div className={classes.submit}>
                {isUrl ? (
                    <motion.button
                        type='submit'
                        onClick={fetchUrl}
                        variants={submitBtnAnimate}
                        whileHover='hover'
                    >
                        Submit
                    </motion.button>
                ) : (
                    <motion.button
                        type='submit'
                        onClick={fetchImage}
                        variants={submitBtnAnimate}
                        whileHover='hover'
                    >
                        Submit
                    </motion.button>
                )}
            </div>

            {/* spinner, gotError msg, result*/}

            {isLoading === true && <Spinner />}
            <Errormsg gotError={error} setError={setError} />
            <ReceivedResult
                items={receivedData}
                isLoading={isLoading}
                dataFetched={dataFetched}
                error={error}
                setDataFetched={setDataFetched}
            />
        </React.Fragment>
    );
};

export default UploadForm;
