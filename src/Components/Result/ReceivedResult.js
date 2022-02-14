import React, {useContext} from "react";
import classes from "./ReceivedResult.module.css";

import { motion, AnimatePresence } from "framer-motion";
import VarientsContext from "../../store/varients-store";

const ReceivedResult = ({
    items,
    isLoading,
    dataFetched,
    error,
    setDataFetched,
    setGetImage
}) => {
    const ctx = useContext(VarientsContext)

    const receivedData = items;

    const popupHandler = () => {
        setDataFetched(false);
        setGetImage(null)
    };

    return (
        <React.Fragment>
            <AnimatePresence>
                {isLoading === false && dataFetched === true && !error && (
                    <React.Fragment>
                        <motion.div
                            className={classes.backdrop}
                            onClick={popupHandler}
                            variants={ctx.backdropAnimation}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                        ></motion.div>

                        {/* result */}

                        <motion.div
                            className={classes.result}
                            variants={ctx.resultModal}
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
                                playsInline={true}
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
};

export default React.memo(ReceivedResult);