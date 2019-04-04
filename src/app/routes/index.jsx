import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Navigation from '../components/common/Navigation/Navigation';
import history from '../history';

import AllNotesContainer from '../containers/notes/AllNotes'
import NoteCreateContainer from '../containers/notes/NoteCreate';
import NoteEditContainer from '../containers/notes/NoteEdit';

class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <React.Fragment>
                    <Navigation/>
                    <Switch>
                        <Route path="/edit/:id" component={NoteEditContainer}/>
                        <Route path="/new" component={NoteCreateContainer}/>
                        <Route path="/" component={AllNotesContainer}/>
                    </Switch>
                </React.Fragment>
            </Router>
        )
    }
}

export default Routes;
