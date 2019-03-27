import React from 'react';
import {connect} from 'react-redux';
import {postNote} from '../actions';
// import NoteForm from './NoteForm';
import NoteFormContainer from '../containers/notes/NoteForm';
import styles from '../../themes/style.scss';


class NoteCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.postNote(formValues);
    };
    render() {
        return (
            <div className={`col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-sm-8 offset-sm-2 ${styles["note-creator"]}`}>
                <h2>Create New Note</h2>
                {/*<NoteForm onSubmit={this.onSubmit} />*/}
                <NoteFormContainer
                    onSubmit={this.onSubmit}
                />
            </div>

        )
    }
}

export default connect(null, {postNote})(NoteCreate);
