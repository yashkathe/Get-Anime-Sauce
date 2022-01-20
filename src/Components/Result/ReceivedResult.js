import React from "react";
import classes from "./ReceivedResult.module.css";


function ReceivedResult(props) {

    // console.log(props.items.result[0]);
    const data1 = props.items
    console.log(data1.result[0])

    return (
        <React.Fragment>
            {/* backdrop */}

            <div
                className={classes.backdrop}
                onClick={props.popupCloseHandler}
            ></div>

            {/* result */}

            <div className={classes.result}>
                <h1>HUNTER×HUNTER (2011)</h1>
                <h2>Episode: 42</h2>
                <video
                    src='https://media.trace.moe/video/11061/%5BDymy%5D%5BHunter%20X%20Hunter%5D%5B075%5D%5BBIG5%5D%5B1280X720%5D.mp4?t=61.795&token=785EQALuRm3RoiWnHLdG9dfTSI'
                    autoPlay={true}
                    loop={true}
                    muted={true}
                ></video>
            </div>
        </React.Fragment>
    );
}

export default ReceivedResult;
