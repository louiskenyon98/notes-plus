import React from 'react';
import {connect} from 'react-redux';
import {noteDataSelector} from '../../../selectors/note/note.selector';
import {getNotes, deleteNote} from '../../../actions/note/notes.action';
import {showDeleteNoteConfirmationModal} from '../../../actions/common/modal.action';

import AllNotes from "../../../components/notes/AllNotes";

class AllNotesContainer extends React.Component {

    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        return (
            <AllNotes
                data={this.props.data}
                // deleteNote={this.props.deleteNote}
                confirmDelete={this.props.showDeleteNoteConfirmationModal}
            />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        // data: state.notes.data
        data: noteDataSelector(state)
    }
};

export default connect(mapStateToProps, {getNotes, deleteNote, showDeleteNoteConfirmationModal})(AllNotesContainer);
