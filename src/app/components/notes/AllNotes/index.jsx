import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../../../../themes/style.scss';

class AllNotes extends React.Component {
    renderAll() {
        //Map array in reverse order so as to render the newest notes first.
        //Shallow copy so as not to alter original array.
        return this.props.notes.slice(0).reverse().map((note) => {
            return (
                <div className={`col-xs-1 col-md-4 col-xl-3 d-flex align-items-stretch ${styles.column}`} key={note.id}>
                    <div className={`ui raised card ${styles.card}`}>
                        <div className="content">
                            <i
                                onClick={() => this.props.deleteNote(note.id)}
                                className={`right floated close icon ${styles["delete-button"]}`}
                            />
                            <div className={`header ${styles.header}`}>
                                {note.title}
                            </div>
                            <div className={`description ${styles.body}`}>
                                <p>{note.body}</p>
                            </div>
                        </div>
                        <div className="extra content">
                            <span className="right floated pencil alternate">
                                <Link to={`/edit/${note.id}`}>
                                    <i className={`pencil alternate icon ${styles["edit-button"]}`}/>
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
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
