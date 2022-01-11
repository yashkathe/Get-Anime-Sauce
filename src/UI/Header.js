import React from "react";

import classes from "./Header.module.css";

const Header = () => {
    return (
        <React.Fragment>
            <div className={classes.divHeader}>
                <div className={classes.divOne}>Anime Sauce</div>
                <div className={classes.divTwo}>
                    Powered by trace moe
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
