import React from "react";
import classes from "./ReceivedResult.module.css";

function ReceivedResult(props) {

        const receivedData = props.items;
        // console.log(receivedData.result[0]);
        console.log(receivedData.result[0].anilist.title.english);
        console.log(receivedData.result[0].episode);
        console.log(receivedData.result[0].similarity);
        console.log(receivedData.result[0].video);




    return (
        <React.Fragment>
            {/* backdrop */}

            <div
                className={classes.backdrop}
                onClick={props.popupCloseHandler}
            ></div>

            {/* result */}

            <div className={classes.result}>
                <h1>{receivedData.result[0].anilist.title.english}</h1>
                <h2>Episode: {receivedData.result[0].episode}</h2>
                <video
                    src={receivedData.result[0].video}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                ></video>
                <h4>Similarity : {receivedData.result[0].similarity}</h4>
            </div>
        </React.Fragment>
    );
}

export default ReceivedResult;
