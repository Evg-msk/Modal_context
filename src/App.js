import styles from './App.module.css'
import {ModalContainer} from "./components/ModalComonent/ModalContainer";
import {ModalContext} from './ModalContext';
import React, {useState} from "react";

const App = () => {

    const state = {
        isOpen: false,
        isDismiss: null,
        result: null,
    };
    const [isOpen, setOpen] = useState(state.isOpen);
    const [result, setResult] = useState(state.result);
    const [isDismiss, setDismiss] = useState(state.isDismiss);

    const showModal = (Component, props) => {
        setOpen(true);
        return (
            <Component
                isOpen={isOpen}
                {...props}
                close={close}
            />
        );
    };

    const close = result => {
        if(result) {
            setDismiss('Success')
        } else {
            setDismiss('')
        }
        setOpen(false);
        setResult(null);
        console.log(result);

    };

    return (
        <ModalContext.Provider
            value={{
                showModal,
                close,
                isOpen,
                setOpen,
                result,
                setResult,
                isDismiss
            }}>
            <div className={styles.App}>
                <ModalContainer/>
            </div>
        </ModalContext.Provider>
    );
};

export default App;
