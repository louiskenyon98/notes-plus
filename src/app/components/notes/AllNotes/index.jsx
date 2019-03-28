import React from 'react';

import Card from '../Card';

class AllNotes extends React.Component {
    renderAll() {
        return this.props.notes.slice(0).reverse().map((note) => {
            return (
                <Card
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    body={note.body}
                    delete={this.props.deleteNote}
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

export default AllNotes;
