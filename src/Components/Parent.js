import React from "react";

import Card from "../UI/Card";
import uploadIcon from "../assets/upload.png";

import classes from "./Parent.module.css";
import UploadForm from "../Components/Form/UploadForm";

const MainForm = () => {
    // variants and hover
    
    return (
        <Card className={classes.Card}>
            <div className={classes.iconContainer}>
                <img src={uploadIcon} alt='upload' />
            </div>
            <div className={classes.info}>
                Upload an image or drop a url of an anime you want to search !
            </div>
            <div>
                <UploadForm />
            </div>
            <div className={classes.credits}>
                Powered by Trace moe
            </div>
        </Card>
    );
};

export default MainForm;
