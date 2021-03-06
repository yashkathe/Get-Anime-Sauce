import React, { useContext } from "react";
import classes from "./ReceivedResult.module.css";

import { motion, AnimatePresence } from "framer-motion";
import VarientsContext from "../../Store/varients-store";

import ResultCard from "./ResultCard";

const ReceivedResult = ({
    items,
    isLoading,
    dataFetched,
    error,
    setDataFetched,
    setGetImage,
}) => {
    const ctx = useContext(VarientsContext);

    const receivedData = items;

    const popupHandler = () => {
        setDataFetched(false);
        setGetImage("");
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
                            <ResultCard
                                englishTitle={
                                    receivedData.result[0].anilist.title.english
                                }
                                altTitle={
                                    receivedData.result[0].anilist.title.romaji
                                }
                                episode={receivedData.result[0].episode}
                                videoLink={receivedData.result[0].video}
                                similarity={receivedData.result[0].similarity}
                            />
                        </motion.div>
                    </React.Fragment>
                )}
            </AnimatePresence>
        </React.Fragment>
    );
};

export default React.memo(ReceivedResult);
