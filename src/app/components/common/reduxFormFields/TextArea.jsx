import React from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import styles from '../../../../themes/style.scss';

export class TextArea extends React.Component {

    hasError() {
        const {touched, error} = this.props.meta;
        return (touched && error);
    }

    render() {
        const className = `field ${this.hasError() ? 'error' : ''}`;
        return (
            <div className={`${className} ${styles["form-body-field-wrapper"]}`}>
                <textarea {...this.props.input} placeholder={this.props.label} rows="10" cols="40" className={`${styles["form-body-field"]}`} />
                {this.hasError() &&
                <Error
                    message={this.props.meta.error}
                />}
            </div>
        )
    }
}

TextArea.propTypes = {
    meta: PropTypes.object,
};
