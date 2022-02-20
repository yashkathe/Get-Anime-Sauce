import React, { useEffect, useState, useContext } from "react";

import classes from "./ImageResponse.module.css";
import { motion, AnimatePresence } from "framer-motion";
import VarientsContext from "../../store/varients-store";

import uploadIcon from "../../assets/upload.png";

const ImageResponse = ({ getImage, setGetImage, getUrl, setGetUrl, isUrl }) => {
    const ctx = useContext(VarientsContext);
    const [preView, setPreView] = useState("");
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (isUrl === true) {
            setGetImage(null);
        } else if (isUrl === false) {
            setGetUrl("");
        }
    }, [getImage, getUrl, isUrl, setGetImage, setGetUrl]);

    useEffect(() => {
        if (getImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreView(reader.result);
            };
            reader.readAsDataURL(getImage);
        }
    }, [getImage, preView]);

    useEffect(() => {
        if (!getImage && !getUrl) {
            setTimeout(() => {
                setShow(true);
            }, 700);
        } else if (getImage || getUrl) {
            setTimeout(() => {
                setShow(false);
            }, 700);
        }
    }, [getImage, getUrl]);

    return (
        <React.Fragment>
            <AnimatePresence>
                {getImage && !isUrl && (
                    <motion.div
                        className={classes.main__div}
                        variants={ctx.resimg}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                    >
                        <img src={preView} alt='feedback img' />
                    </motion.div>
                )}
                {getUrl && isUrl && (
                    <motion.div
                        className={classes.main__div}
                        variants={ctx.resimg}
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                    >
                        <img src={getUrl} alt='feedback img' />
                    </motion.div>
                )}

                {!getImage && !getUrl && show === true && (
                    <div className={classes.container}>
                        <div className={classes.info}>
                            Insert an URL or upload an image !
                        </div>
                        <div className={classes.iconContainer}>
                            <img src={uploadIcon} alt='upload' />
                        </div>
                    </div>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};

export default ImageResponse;
