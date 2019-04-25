import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../../themes/style.scss';

class Modal extends React.Component {
    render() {
        if (this.props.show) {
            return (
                <React.Fragment>
                    <div className={styles.veil} onClick={this.props.close}/>
                    <div className={styles.modal}>
                        {this.props.title && <h1>{this.props.title}</h1>}
                        {this.props.children}
                    </div>
                </React.Fragment>
            )
        }
        return null;
    }

}

Modal.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.object
};

export default Modal;
