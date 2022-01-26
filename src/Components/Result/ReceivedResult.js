import React from "react";
import classes from "./ReceivedResult.module.css";

import { motion, AnimatePresence } from "framer-motion";

function ReceivedResult({
    items,
    isLoading,
    dataFetched,
    error,
    setDataFetched,
}) {
    //variants
    const backdropAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: { duration: 1 },
        },
    };

    const resultModal = {
        hidden: {
            y: "50vh",
        },
        visible: {
            y: "0vh",
            transition: { type: "tween", duration: 1 },
        },
        exit: {
            y: "50vh",
            transition: { duration: 1 },
        },
    };

    const receivedData = items;

    const popupHandler = () => {
        setDataFetched(false);
    };

    return (
        <React.Fragment>
            <AnimatePresence>
                {isLoading === false && dataFetched === true && !error && (
                    <React.Fragment>
                        <motion.div
                            className={classes.backdrop}
                            onClick={popupHandler}
                            variants={backdropAnimation}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                        ></motion.div>

                        {/* result */}

                        <motion.div
                            className={classes.result}
                            variants={resultModal}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                        >
                            {/* title */}
                            {receivedData.result[0].anilist.title.english ===
                            null ? (
                                <h1>
                                    {
                                        receivedData.result[0].anilist.title
                                            .romaji
                                    }
                                </h1>
                            ) : (
                                <h1>
                                    {
                                        receivedData.result[0].anilist.title
                                            .english
                                    }
                                </h1>
                            )}

                            {/* episode  */}

                            {receivedData.result[0].episode === null ? (
                                <h3>Couldn't identify the episode</h3>
                            ) : (
                                <h2>
                                    Episode: {receivedData.result[0].episode}
                                </h2>
                            )}

                            {/* video */}

                            <video
                                src={receivedData.result[0].video}
                                autoPlay={true}
                                loop={true}
                                muted={true}
                            ></video>

                            {/* similarity */}

                            <h4>
                                Similarity : {receivedData.result[0].similarity}
                            </h4>
                        </motion.div>
                    </React.Fragment>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
}

export default ReceivedResult;
