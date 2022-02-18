import React, { useEffect, useState, useContext } from "react";

import classes from "./ImageResponse.module.css";
import { motion, AnimatePresence } from "framer-motion";
import VarientsContext from "../../store/varients-store";

const ImageResponse = ({ getImage, getUrl, isUrl }) => {
    const ctx = useContext(VarientsContext);
    const [preView, setPreView] = useState("");

    useEffect(() => {
        if (getImage) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreView(reader.result);
            };
            reader.readAsDataURL(getImage);
        }
    }, [getImage, preView]);

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
            </AnimatePresence>
        </React.Fragment>
    );
};

export default ImageResponse;
