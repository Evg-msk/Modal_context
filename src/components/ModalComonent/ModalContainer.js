import React from 'react'
import styles from './ModalContainer.module.sass'
import {ModalContext} from '../../ModalContext'
import {useContext} from "react"
import WarningModal from "../Modal/Modal"


export const ModalContainer = () => {

    const {showModal, isDismiss, result, setResult, isOpen} = useContext(ModalContext);

    const showWarning = async () => {
        const result = await showModal(WarningModal, { text: "Are you ready?" });
        setResult(result);
        console.log(result ? "yes" : "no");

    };
    return (
        <div>
            {isOpen && result}
            <div
                className={styles.title}
            >Result: <span className={isDismiss ? styles.success : ''}>{isDismiss}</span>
            </div>
            <button
                className={styles.button_show}
                onClick={showWarning}
            >Show modal</button>
        </div>

    )

};