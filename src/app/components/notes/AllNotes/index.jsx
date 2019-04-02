import React from 'react';

import Card from '../Card';

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

export default AllNotes;
