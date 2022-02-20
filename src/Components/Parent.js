import React from "react";

import Card from "../UI/Card";

import classes from "./Parent.module.css";
import UploadForm from "../Components/Form/UploadForm";

const MainForm = () => {
    // variants and hover
    
    return (
        <Card className={classes.Card}>
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
