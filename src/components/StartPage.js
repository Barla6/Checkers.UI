import React from "react";
import styles from "./StartPage.module.css";

const StartPage = () => {
    return (
        <div className={styles["start-page"]}>
            {/* <img
                className={styles["header-img"]}
                src={require("../assets/header.png")}
                alt=""
            ></img> */}
            <div className={styles["header"]}></div>
            <div className={styles["bottom-div"]}>
                <button className={styles["play-button"]}>play</button>
            </div>
        </div>
    );
};

export default StartPage;
