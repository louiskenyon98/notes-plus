import React from 'react';
import {connect} from 'react-redux';

import {getAllNotesSelector} from '../../../selectors/note/note.selector';
import {getNotes} from '../../../actions/note/notes.action';
import {showDeleteNoteConfirmationModal} from '../../../actions/common/modal.action';

import AllNotes from '../../../components/notes/AllNotes/AllNotes';

export class AllNotesContainer extends React.Component {

    componentDidMount() {
        this.props.getNotes();
    }

    render() {
        return (
            <AllNotes
                data={this.props.notes}
                confirmDelete={this.props.showDeleteNoteConfirmationModal}
            />
        )
    }

}

const mapStateToProps = (state) => {
    return getAllNotesSelector(state)
};

export default connect(mapStateToProps, {getNotes, showDeleteNoteConfirmationModal})(AllNotesContainer);
