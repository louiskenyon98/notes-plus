import React from 'react';
import Error from './Error';
import styles from "./FormFields.styles.scss";

export class TextArea extends React.Component {

    hasError() {
        const {touched, error} = this.props.meta;
        return (touched && error);
    }

    render() {
        const className = `field ${this.hasError() ? 'error' : ''}`;
        return (
            <div className={`${className} ${styles.formBodyFieldWrapper}`}>
                <textarea {...this.props.input} placeholder={this.props.label} rows="10" cols="40" className={`${styles.formBodyField}`} />
                {this.hasError() &&
                <Error
                    message={this.props.meta.error}
                />}
            </div>
        )
    }
}
