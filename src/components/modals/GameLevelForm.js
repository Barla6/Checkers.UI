import React from "react";
import ReactDOM from "react-dom";
import styles from "./GameLevelForm.module.css";
import { Card, CardContent, CardActions, Button } from "@mui/material";

const GameLevelFormModal = (props) => {
    return (
        <div>
            <div className={styles.backdrop}></div>
            <Card className={styles["game-level-card"]}>
                <CardActions className={styles["actions-container"]}>
                    <Button
                        className={styles["exit-button"]}
                        onClick={props.exitHandler}
                    >
                        <img
                            className={styles["exit-icon"]}
                            src={require("../../assets/exit_icon.png")}
                            alt="exit icon"
                        ></img>
                    </Button>
                </CardActions>
                <CardContent className={styles["game-level-card-content"]}>
                    <Button className={styles["level-easy"]}>easy</Button>
                    <Button className={styles["level-medium"]}>medium</Button>
                    <Button className={styles["level-hard"]}>hard</Button>
                </CardContent>
            </Card>
        </div>
    );
};

const GameLevelForm = (props) => {
    return (
        <div>
            {props.open &&
                ReactDOM.createPortal(
                    <GameLevelFormModal
                        exitHandler={props.exitHandler}
                        choseGameTypeHanlder={props.choseGameTypeHanlder}
                    ></GameLevelFormModal>,
                    document.getElementById("overlay-root")
                )}
        </div>
    );
};

export default GameLevelForm;
