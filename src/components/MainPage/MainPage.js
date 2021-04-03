import styles from "./MainPage.module.sass";
import React, {useContext} from "react";
import {ModalContext} from "../../ModalContext";


export const MainPage = () => {
    const {showWarning, confirmationResult} = useContext(ModalContext);
    return (
        <>
            <div className={styles.title}>
                Result: <span className={styles[confirmationResult]}>{confirmationResult}</span>
            </div>
            <button className={styles.button_show} onClick={showWarning}>Show modal</button>
        </>
    )
};