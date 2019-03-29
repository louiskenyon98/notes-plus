import React from 'react';
import styles from '../../../../themes/style.scss';

class Modal extends React.PureComponent {
    render() {
        const {show, children} = this.props;
        if (show) {
            return (
                <React.Fragment>
                    <div className={styles.veil}/>
                    <div className={styles.modal}>
                        {this.props.title && <h1>{this.props.title}</h1>}
                        {children}
                        <button className={`${styles.modalButton} ui inverted primary button`} onClick={this.props.close}>close</button>
                    </div>
                </React.Fragment>
            )
        }
        return null;
    }

}

export default Modal;
