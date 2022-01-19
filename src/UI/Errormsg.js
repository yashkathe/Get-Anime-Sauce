import React from "react";

import classes from "./Errormsg.module.css";

function Errormsg(props) {

    return (
        <React.Fragment>
            <div onClick={props.popupCloseHandler} className={classes.backdrop}></div>
            <div className={classes.error}>
                <h4>Error !</h4>
                <p>{props.errorMsg}</p>
                <button onClick={props.popupCloseHandler}>close</button>
            </div>
        </React.Fragment>
    );
}

export default Errormsg;
