import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../../../themes/style.scss';

export default class ConfirmationMessage extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.title}</h1>
                {this.props.body}
                <div style={{float: 'right' , margin: 20}}>
                    {this.props.decline && <button
                        className={`${styles.modalButton} ui inverted primary button`}
                        // onClick={this.props.accept.callback}>{this.props.accept.label}
                        onClick={this.props.decline.onClick}
                    >
                        {this.props.decline.label}
                    </button>}
                    {this.props.accept && <button
                        className={`${styles.modalButton} ui inverted primary button`}
                        // onClick={this.props.accept.callback}>{this.props.accept.label}
                        onClick={this.props.accept.onClick}
                    >
                        {this.props.accept.label}
                    </button>}
                </div>
            </React.Fragment>
        )
    }
}

ConfirmationMessage.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
    decline: PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }),
    accept: PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }),
};
