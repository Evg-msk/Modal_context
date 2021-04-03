import styles from './App.module.css'
import {ModalContainer} from "./components/ModalContainer/ModalContainer";
import {ModalContext} from './ModalContext';
import React, {useState} from "react";
import ConfirmationModal from "./components/ConfirmationModal/ConfirmationModal";
import {MainPage} from "./components/MainPage/MainPage";


const App = () => {
    const [modalProps, setModalProps] = useState({});
    const [resolvingFunctions, setResolvingPromiseFunction] = useState([]);
    const [confirmationResult, setConfirmationResult] = useState();


    const showModal = (Component, props) => {
        setModalProps({Component, props, isOpened: true});

        return new Promise(resolve => {
            setResolvingPromiseFunction([resolve])
        })
    };

    const closeModal = result => {
        setModalProps({isOpened: false});
        resolvingFunctions.map(resolve => resolve(result));
        setResolvingPromiseFunction([])
    };

    const showWarning = async () => {
        const result = await showModal(ConfirmationModal, {text: "Are you ready?"});
        setConfirmationResult(result ? "success" : "cancel")
    };

    return (
        <ModalContext.Provider value={{
            modalProps,
            confirmationResult,
            showModal, closeModal, showWarning
        }}>
            <div className={styles.App}>
                <MainPage/>
                <ModalContainer/>
            </div>
        </ModalContext.Provider>
    );
};


export default App;
