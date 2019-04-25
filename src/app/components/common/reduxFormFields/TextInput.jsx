import React from 'react';
import Error from './Error';
import styles from "../../../../themes/style.scss";
import PropTypes from "prop-types";
import {TextArea} from "./TextArea";

export class TextInput extends React.Component {

    hasError() {
        const {touched, error} = this.props.meta;
        return (touched && error);
    }

    render() {
        const className = `field ${this.hasError() ? 'error' : ''}`;
        return (
            <div className={`${className} ${styles["form-body-field-wrapper"]}`}>
              <input {...this.props.input} placeholder={this.props.label} autoComplete="off" className={`${styles["form-title-field"]}`} />
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
