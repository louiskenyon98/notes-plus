import React from 'react';
import {connect} from 'react-redux';
import {deleteNote, getNotes} from '../../../../actions/note/notes.action';
import {closeModal} from '../../../../actions/common/modal.action';
import DeleteNote from '../../../../components/common/Modal/ConfirmationMessage/DeleteNote';

class DeleteNoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.deleteNote = this.deleteNote.bind(this);
    }

    deleteNote() {
        this.props.deleteNote(this.props.id, () => {
            this.props.closeModal();
            this.props.getNotes();
        })
    }

    render() {
        return (
            <DeleteNote
                cancel={this.props.closeModal}
                delete={this.deleteNote}
            />
        )
    }
}

export default connect(undefined, {deleteNote, getNotes, closeModal})(DeleteNoteContainer)
