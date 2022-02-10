import React from "react";

const AuthContext = React.createContext({
    hoverBtn: {
        rotate: [0, -18, 18, -18, 18, 0],
    },

    tap: { scale: 1.5 },

    urlFocus: {
        scale: 1.2,
        borderBottom: "3px solid black",
        boxShadow: "0 4px 6px rgba(0,0,0,0.5)",
        transition: {
            type: "spring",
            duration: 0.1,
        },
    },

    submitBtnAnimate: {
        hover: {
            scale: 1.1,
            boxShadow: "1px 1px 10px rgba(0,0,0,0.5)",
            transition: {
                type: "tween",
            },
        },
    },
});

export default AuthContext;
