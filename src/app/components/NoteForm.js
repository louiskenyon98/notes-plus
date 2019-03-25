import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import styles from '../style.scss';

class NoteForm extends React.Component {
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    };

    renderInput = ({input, label, meta}) => {
        //Validate form fields after touch. Append classname based on error status, use CSS lib to display error.
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={`${className} ${styles["form-title-field-wrapper"]}`}>
                <input {...input} placeholder={label} autoComplete="off" className={`${styles["form-title-field"]}`} />
                {this.renderError(meta)}
            </div>
        )
    };

    renderTextAreaField = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={`${className} ${styles["form-body-field-wrapper"]}`}>
                <textarea {...input} placeholder={label} rows="10" cols="40" className={`${styles["form-body-field"]}`} />
                {this.renderError(meta)}
            </div>
        )
    };
    renderError = ({error, touched}) => {
        if(touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    };
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className={`note-editor-form ui form error ${styles.form}`}>
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Enter Note Title..."
                />
                <Field
                    name="body"
                    component={this.renderTextAreaField}
                    label="Enter Note Body..."
                />
                <button className={`ui right floated button`}>Submit</button>
                <Link to="/"><button className={`ui button`}>Cancel</button></Link>
            </form>
        )
    }
}
//Checks that form fields contain data.
const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        errors.title = 'You must enter a title for your note'
    }
    if(!formValues.body){
        errors.body = 'You must enter a body for your note'
    }
    return errors;
};

export default reduxForm({
    form: 'noteForm',
    validate
})(NoteForm);

