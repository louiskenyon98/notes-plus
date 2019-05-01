import React from 'react';
import styles from '../Modal.styles.scss';

export default class ConfirmationMessage extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.title}</h1>
                {this.props.body}
                <div style={{float: 'right' , margin: 20}}>
                    {this.props.accept && <button
                        className={`${styles.modalButton} ui inverted primary button`}
                        onClick={this.props.accept.onClick}
                    >
                        {this.props.accept.label}
                    </button>}
                    {this.props.decline && <button
                        className={`${styles.modalButton} ui inverted red button`}
                        onClick={this.props.decline.onClick}
                    >
                        {this.props.decline.label}
                    </button>}
                </div>
            </React.Fragment>
        )
    }
}
