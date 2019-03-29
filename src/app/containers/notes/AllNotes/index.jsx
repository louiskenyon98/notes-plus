import React from 'react';
import {connect} from 'react-redux';
import {getNotes, deleteNote} from '../../../actions/note/notes.action';

import AllNotes from "../../../components/notes/AllNotes";

class AllNotesContainer extends React.Component {
    componentDidMount() {
        this.props.getNotes();
    }
    render() {
        return (
            <AllNotes
                notes={this.props.notes}
                deleteNote={this.props.deleteNote}
            />
        )
    }

}

const mapStateToProps = (state) => {
    return {
        notes: Object.values(state.notes)
    }
};

export default connect(mapStateToProps, {getNotes, deleteNote})(AllNotesContainer);
