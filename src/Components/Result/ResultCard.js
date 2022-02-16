import React from "react";

const ResultCard = (props) => {
    return (
        <React.Fragment>
            {/* title */}
            {props.englishTitle === null ? (
                <h1>{props.altTitle}</h1>
            ) : (
                <h1>{props.englishTitle}</h1>
            )}

            {/* episode  */}
            {props.episode === null ? (
                <h3>Couldn't identify the episode</h3>
            ) : (
                <h2>Episode: {props.episode}</h2>
            )}

            {/* video */}
            <video
                src={props.videoLink}
                autoPlay={true}
                loop={true}
                muted={true}
                playsInline={true}
            ></video>

            {/* similarity */}
            <h4>Similarity : {props.similarity}</h4>
        </React.Fragment>
    );
};

export default ResultCard;
