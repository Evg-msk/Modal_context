import styles from './Modal.module.sass';
const WarningModal = props => {
    return (
        <div className={styles.overlay}>
            <div className={styles.Modal}>
                {props.text}
                <div className={styles.Modal__buttons}>
                    <button
                        className={styles.btn_yes}
                        onClick={() => props.close(true)}
                    >Yes!
                    </button>
                    <button
                        className={styles.btn_no}
                        onClick={() => props.close(false)}
                    >No
                    </button>
                </div>
            </div>
        </div>


    );
};

export default WarningModal;