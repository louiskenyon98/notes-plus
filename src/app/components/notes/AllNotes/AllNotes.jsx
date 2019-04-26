import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

class AllNotes extends React.PureComponent {
    renderAll() {
        return this.props.data.map((note) => {
            return (
                <Card
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    body={note.body}
                    delete={this.props.confirmDelete}
                />
            )
        })
    }

    render() {
        return (
            <div className={`container-fluid`}>
                <div className={`row`}>
                    {this.renderAll()}
                </div>
            </div>
        )
    }
}

AllNotes.propTypes = {
    data: PropTypes.array
};

export default AllNotes;
