import React from 'react';
import styles from '../../../../../themes/style.scss';

export default class StatusMessage extends React.PureComponent {

    returnTitle() {
        if (this.props.title) {
            return this.props.title;
        }
        if (this.props.status === 'success') {
            return 'Successful'
        }
        if (this.props.status === 'fail') {
            return 'Sad times'
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.returnTitle()}</h1>
                {this.props.body}
                <button
                    className={`${styles.modalButton} ui inverted red button`}
                    onClick={this.props.close}
                >
                    Close
                </button>
            </React.Fragment>
        )
    }
}
