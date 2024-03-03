import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/PreloaderAnim";

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Hello !</span>
                <span>Search  </span>
                <span>Buy </span>
            </div>
        </div>
    );
};

export default PreLoader;