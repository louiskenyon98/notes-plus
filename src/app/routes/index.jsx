import React from 'react';
import {Router, Route} from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import history from '../history';

import AllNotesContainer from '../containers/notes/AllNotes'
import NoteCreateContainer from '../containers/notes/NoteCreate';
import NoteEditContainer from '../containers/notes/NoteEdit';

class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Navigation/>
                    <Route path="/" exact component={AllNotesContainer}/>
                    <Route path="/new" exact component={NoteCreateContainer}/>
                    <Route path="/edit/:id" exact component={NoteEditContainer}/>
                </div>
            </Router>
        )
    }
}
export default Routes;
