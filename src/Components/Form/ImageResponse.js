import React, { useEffect, useState } from "react";

import classes from "./ImageResponse.module.css";

const ImageResponse = ({ getImage, getUrl, isUrl }) => {
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
            {getImage && !isUrl && (
                <div className={classes.main__div}>
                    <img src={preView} alt='feedback img' />
                </div>
            )}
            {getUrl && isUrl && (
                <div className={classes.main__div}>
                    <img src={getUrl} alt='feedback img' />
                </div>
            )}
        </React.Fragment>
    );
};

export default ImageResponse;
