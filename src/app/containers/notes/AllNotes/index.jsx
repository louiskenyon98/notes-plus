import React from 'react';
import {connect} from 'react-redux';
import {getNotes, deleteNote} from '../../../actions/note/notes.action';
import {showConfirmationModal} from '../../../actions/common/modal.action';

import AllNotes from "../../../components/notes/AllNotes";

class AllNotesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.deleteNote = this.deleteNote.bind(this);
    }

    componentDidMount() {
        this.props.getNotes();
    }

    deleteNote(id) {
        // this.props.showConfirmationModal({
        //     title: 'Do you want to deletethisnote',
        //     accept: {
        //         label: 'YES',
        //         callback: () => this.props.deleteNote(id)
        //     },
        //     decline: {
        //         label: 'NO',
        //         callback: this.props.closeModal
        //     }
        // });
        this.props.deleteNote(id);
    }

    render() {
        return (
            <AllNotes
                notes={this.props.notes}
                deleteNote={this.deleteNote}
            />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        notes: Object.values(state.notes)
    }
};

export default connect(mapStateToProps, {getNotes, deleteNote, showConfirmationModal})(AllNotesContainer);
