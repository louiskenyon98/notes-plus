import React from 'react';
import Error from './Error';
import styles from "./FormFields.styles.scss";

export class TextInput extends React.Component {

    hasError() {
        const {touched, error} = this.props.meta;
        return (touched && error);
    }

    render() {
        const className = `field ${this.hasError() ? 'error' : ''}`;
        return (
            <div className={`${className} ${styles.formBodyFieldWrapper}`}>
              <input {...this.props.input} placeholder={this.props.label} autoComplete="off" className={`${styles.formTitleField}`} />
                {this.hasError() &&
                <Error
                    message={this.props.meta.error}
                />}
            </div>
        )
    }
}
