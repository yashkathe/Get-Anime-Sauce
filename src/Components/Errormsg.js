import React from "react";

import classes from "./Errormsg.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Errormsg = ({ gotError, setError }) => {
    //variants

    //backdrop variant
    const backdropAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { duration: 0.8 },
        },
    };

    //modal variant
    const errorModal = {
        hidden: {
            y: "-100vh",
            opacity: 0,
        },
        visible: {
            y: "-50vh",
            opacity: 1,
            transition: { type: "spring" },
        },
    };

    const popupCloseHandler = () => {
        setError(null);
    };

    return (
        <React.Fragment>
            <AnimatePresence>
                {gotError && (
                    <React.Fragment>
                        {/* backdrop  */}
                        <motion.div
                            onClick={popupCloseHandler}
                            className={classes.backdrop}
                            variants={backdropAnimation}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                        ></motion.div>

                        {/* gotError message modal  */}

                        <motion.div
                            className={classes.error}
                            variants={errorModal}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                        >
                            <h4>Error !</h4>
                            <p>{gotError}</p>
                            <button onClick={popupCloseHandler}>close</button>
                        </motion.div>
                    </React.Fragment>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
}

export default Errormsg;
