import React, { useState, useRef } from "react";

import folderIcon from "../../assets/folder.png";
import urlIcon from "../../assets/url.png";
import { motion } from "framer-motion";

import classes from "./UploadForm.module.css";

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

    const [isUrl, setIsUrl] = useState(true);
    const [error, setError] = useState(null)

    const photoHandler = () => {
        setIsUrl(false);
        inputFile.current.click();
        console.log(inputFile);
    };

    const urlHandler = () => {
        setIsUrl(true);
    };

    //http request

    async function fetchUrlHandler() {
        const urlInput = urlRef.current.value;

        try{
            const response = await fetch(
                `https://api.trace.moe/search?url=${encodeURIComponent(
                    `${urlInput}`
                )}`
            );
    
            const data = await response.json();
    
            console.log(data);
        }catch(error){
            setError(error.message)
            console.log(error)
        }


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
        </React.Fragment>
    );
};

export default UploadForm;
