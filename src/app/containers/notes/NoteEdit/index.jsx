import _ from 'lodash';
import React from 'react';
import {connect} from 'react-redux';
import {getNote, patchNote} from '../../../actions/note/notes.action';
import {showHelloWorldModal} from '../../../actions/common/modal.action';
import NoteFormContainer from '../NoteForm';
import styles from '../../../../themes/style.scss';

class NoteEditContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getNote(this.props.match.params.id);
    }

    onSubmit(formValues) {
        this.props.patchNote(formValues)
    };

    render() {
        return (
            <div className={`col-xl-4 offset-xl-4 col-lg-6 offset-lg-3 col-sm-8 offset-sm-2 ${styles["note-creator"]}`}>
                <h2>Edit Note</h2>
                <NoteFormContainer
                    //Use Lodash to extract only the properties specified below from this.props.note.
                    initialValues={_.pick(this.props.note, 'id', 'title', 'body')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {note: state.notes[ownProps.match.params.id]}
};

export default connect(
    mapStateToProps,
    {getNote, patchNote, showHelloWorldModal}
)(NoteEditContainer)
