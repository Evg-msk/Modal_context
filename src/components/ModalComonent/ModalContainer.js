import React from 'react'
import {ModalContext} from '../../ModalContext'
import {useContext} from "react"


// export const ModalContainer = () => {
//
//     const {showModal, isDismiss, result, setResult, isOpen} = useContext(ModalContext);
//
//     const showWarning = async () => {
//         const result = await showModal(WarningModal, { text: "Are you ready?" });
//         setResult(result);
//         console.log(result);
//         console.log(result ? "yes" : "no");
//
//     };
//     return (
//         <div>
//             {isOpen && result}
//             <div
//                 className={styles.title}
//             >Result: <span className={isDismiss ? styles.success : ''}>{isDismiss}</span>
//             </div>
//             <button
//                 className={styles.button_show}
//                 onClick={showWarning}
//             >Show modal</button>
//         </div>
//
//     )
//
// };

export const ModalContainer = () => {
    const { modalProps, closeModal } = useContext(ModalContext);
    const { isOpened, Component, props } = modalProps || {};

    return (
        <div>
            {isOpened && <Component {...props} close={closeModal} />}
        </div>
    )
};