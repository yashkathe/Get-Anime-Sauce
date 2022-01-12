import React, { useState } from "react";

import folderIcon from "../../assets/folder.png";
import urlIcon from "../../assets/url.png";
import { motion } from "framer-motion";

import classes from "./UploadForm.module.css";

const UploadForm = () => {
    // variants and hover

    const hover = {
        rotate: [0, -18, 18, -18, 18, 0],
    };

    // state handling

    const [isUrl, setIsUrl] = useState(true);

    const photoHandler = () => {
        setIsUrl(false);
    };

    const urlHandler = () => {
        setIsUrl(true);
    };

    return (
        <React.Fragment>
            <div className={classes.altButtons}>
                <div>
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
            <div>
                <form>
                    <input
                        className={`${classes.urlInput} ${
                            !isUrl && classes.cancel
                        }`}
                        placeholder='Image URL'
                    />
                </form>
                <form>
                    <input type='file' />
                </form>
            </div>
        </React.Fragment>
    );
};

export default UploadForm;
