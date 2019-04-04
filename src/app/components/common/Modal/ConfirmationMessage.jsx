import React from 'react';
import styles from '../../../../themes/style.scss';

export default class ConfirmationMessage extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <h1>Is you sure fam?</h1>
                {this.props.body}
                <button className={`${styles.modalButton} ui inverted primary button`}
                        onClick={this.props.accept.callback}>{this.props.accept.label}
                </button>
            </React.Fragment>
        )
    }
}
