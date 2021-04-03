import React from 'react'
import {ModalContext} from '../../ModalContext'
import {useContext} from "react"


export const ModalContainer = () => {
    const {modalProps, closeModal} = useContext(ModalContext);
    const {isOpened, Component, props} = modalProps;

    if (!isOpened) return null;

    return <Component {...props} close={closeModal}/>

};