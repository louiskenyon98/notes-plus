import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {TextArea, TextInput} from '../../../components/common/reduxFormFields/index';

import styles from '../../../../themes/style.scss';
import {Link} from "react-router-dom";

export class NoteFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(formValues) {
        this.props.onSubmit(formValues)
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}
                  className={`note-editor-form ui form error ${styles.form}`}>
                <Field
                    name='title'
                    component={TextInput}
                    label='Enter Note Title...'
                />
                <Field
                    name='body'
                    component={TextArea}
                    label='Enter Note Body...'
                />
                <button className={`ui right floated button`}>Submit</button>
                <Link to="/">
                    <button className={`ui button`}>Cancel</button>
                </Link>
            </form>
        )
    }
}

export const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title for your note'
    }
    if (!formValues.body) {
        errors.body = 'You must enter a body for your note'
    }
    return errors;
};
export default reduxForm({
    form: 'noteForm',
    validate,
    enableReinitialize: true
})(NoteFormContainer);
