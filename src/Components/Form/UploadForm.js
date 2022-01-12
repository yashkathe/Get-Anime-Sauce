import React, { useState, useRef } from "react";

import folderIcon from "../../assets/folder.png";
import urlIcon from "../../assets/url.png";
import { motion } from "framer-motion";

import classes from "./UploadForm.module.css";

const UploadForm = () => {
    //refs

    const inputFile = useRef(null);
    // variants and hover

    const hover = {
        rotate: [0, -18, 18, -18, 18, 0],
    };

    // state handling

    const [isUrl, setIsUrl] = useState(true);

    const photoHandler = () => {
        setIsUrl(false);
        inputFile.current.click();
        console.log(inputFile);
    };

    const urlHandler = () => {
        setIsUrl(true);
    };

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
                    whileFocus={{
                        scale: 1.3,
                        borderBottom: "3px solid black",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
                        transition: {
                            type:'tween',
                            mass:0.8,
                            duration:0.1
                        },
                    }}
                />
            </div>
            <div className={classes.submit}>
                <button type='submit'>Submit</button>
            </div>
        </React.Fragment>
    );
};

export default UploadForm;
