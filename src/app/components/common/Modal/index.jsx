import React from 'react';
import styles from '../../../../themes/style.scss';

class Modal extends React.PureComponent {
    render() {
        const {show, children, closeModal} = this.props;
        //1 is placeholder for visible prop.
        if (show) {
            return (
                <React.Fragment>
                    <div className={styles.veil}/>
                    <div className={styles.modal}>
                        {children}
                        {/*<button className={styles.modalButton} onClick={closeModal}>close</button>*/}
                        <button className={`${styles.modalButton} ui inverted primary button`} onClick={closeModal}>close</button>
                    </div>
                </React.Fragment>
            )
        }
        return null;
    }

}

export default Modal;
