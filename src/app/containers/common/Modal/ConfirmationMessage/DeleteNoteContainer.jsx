import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteNote, getNotes} from '../../../../actions/note/notes.action';
import {closeModal} from '../../../../actions/common/modal.action';
import DeleteNote from '../../../../components/common/Modal/ConfirmationMessage/DeleteNote';

export class DeleteNoteContainer extends React.Component {
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

DeleteNoteContainer.propTypes = {
  deleteNote: PropTypes.func,
  closeModal: PropTypes.func,
  getNotes: PropTypes.func
};

export default connect(undefined, {deleteNote, getNotes, closeModal})(DeleteNoteContainer)
