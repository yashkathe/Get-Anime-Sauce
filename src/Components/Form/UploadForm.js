import React, { useState, useRef } from "react";

import folderIcon from "../../assets/folder.png";
import urlIcon from "../../assets/url.png";
import { motion } from "framer-motion";

import ReceivedResult from "../Result/ReceivedResult";
import Spinner from "../../UI/Spinner";

import classes from "./UploadForm.module.css";
import Errormsg from "../../UI/Errormsg";

const UploadForm = () => {
    //refs

    const inputFile = useRef(null);

    const urlRef = useRef();

    // variants and hover

    const hover = {
        rotate: [0, -18, 18, -18, 18, 0],
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

    // state handling

    //state for assigning css classes
    const [isUrl, setIsUrl] = useState(true);

    //state for fetching data
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [receivedData, setReceivedData] = useState([]);

    const photoHandler = () => {
        setIsUrl(false);
        inputFile.current.click();
        console.log(inputFile);
    };

    const urlHandler = () => {
        setIsUrl(true);
    };

    const popupHandler = () => {
        setError(null);
        console.log("close");
    };

    //http request

    async function fetchUrlHandler() {
        setError(null);
        setIsLoading(true);
        try {
            const response = await fetch(
                `https://api.trace.moe/search?url=${encodeURIComponent(
                    `${urlRef.current.value}`
                )}`
            );

            if (!response.ok) {
                throw new Error("Request failed or Incorrect image url");
            }

            const data = await response.json();
            setIsLoading(false);
            setReceivedData(data);
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }

        urlRef.current.value = "";
    }

    return (
        <React.Fragment>
            <div className={classes.altButtons}>
                {/* add folder button  */}

                <div>
                    <input
                        type='file'
                        className={classes.fileUpload}
                        ref={inputFile}
                    />
                    <motion.button
                        className={`${classes.optButton} ${
                            !isUrl && classes.optButtonActive
                        }`}
                        onClick={photoHandler}
                        whileHover={hover}
                    >
                        <img
                            className={classes.upIcons}
                            src={folderIcon}
                            alt='folder Icon'
                        ></img>
                    </motion.button>
                </div>

                {/* url insert button  */}

                <div>
                    <motion.button
                        className={`${classes.optButton} ${
                            isUrl && classes.optButtonActive
                        }`}
                        onClick={urlHandler}
                        whileHover={hover}
                    >
                        <img
                            className={classes.upIcons}
                            src={urlIcon}
                            alt='attachment chain Icon'
                        ></img>
                    </motion.button>
                </div>
            </div>

            {/* rest of the form  */}

            <div className={classes.urlDiv}>
                <motion.input
                    className={`${classes.urlInput} ${
                        !isUrl && classes.cancel
                    }`}
                    placeholder='Image URL'
                    whileFocus={urlFocus}
                    ref={urlRef}
                />
            </div>
            <div className={classes.submit}>
                <button type='submit' onClick={fetchUrlHandler}>
                    Submit
                </button>
            </div>
            {/* spinner  */}

            {isLoading && <Spinner />}
            {error && (
                <Errormsg errorMsg={error} popupCloseHandler={popupHandler} />
            )}

            {/* result */}

            <ReceivedResult items={receivedData} />
        </React.Fragment>
    );
};

export default UploadForm;
