import React, {useContext} from "react";

import classes from "./Errormsg.module.css";
import { motion, AnimatePresence } from "framer-motion";
import VarientsContext from "../store/varients-store";

const Errormsg = ({ gotError, setError }) => {
    const ctx = useContext(VarientsContext)

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
                            variants={ctx.backdropAnimationError}
                            initial='hidden'
                            animate='visible'
                            exit='hidden'
                        ></motion.div>

                        {/* gotError message modal  */}

                        <motion.div
                            className={classes.error}
                            variants={ctx.errorModal}
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

export default React.memo(Errormsg);
