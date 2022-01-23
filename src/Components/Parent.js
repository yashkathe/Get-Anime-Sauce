import React from "react";

import Card from "../UI/Card";
import uploadIcon from "../assets/upload.png";

import { motion } from "framer-motion";
import classes from "./Parent.module.css";
import UploadForm from "../Components/Form/UploadForm";

const MainForm = () => {
    // variants and hover

    const hover = {
        scale: 1.3,
    };

    return (
        <Card className={classes.Card}>
            <div className={classes.iconContainer} whileHover={hover}>
                <motion.img src={uploadIcon} alt='upload' />
            </div>
            <div className={classes.info}>
                Upload an image or drop a url to to get the anime you want
            </div>
            <div>
                <UploadForm />
            </div>
        </Card>
    );
};

export default MainForm;
