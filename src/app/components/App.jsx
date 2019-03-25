import React from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Navigation from './Navigation';
import history from '../history';

import {getNotes} from '../actions';
import AllNotes from './AllNotes';
import NoteCreate from './NoteCreate';
import NoteEdit from './NoteEdit';

class App extends React.Component {
    componentDidMount() {
        //Calls getNotes function so as to perform error checking functionality.
        this.props.getNotes();
    }
    render() {
        //Check error prop and only render content if there are no api errors.
        //Using low-level interface "<Router>" to sync custom history.
        if(this.props.error === false) {
            return (
                <div>
                    <Router history={history}>
                        <div>
                            <Navigation/>
                            <Route path="/" exact component={AllNotes}/>
                            <Route path="/new" exact component={NoteCreate}/>
                            <Route path="/edit/:id" exact component={NoteEdit}/>
                        </div>
                    </Router>
                </div>
            )
        }
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Navigation/>
                        <div className="ui icon negative message">
                            <i className="frown outline icon"/>
                            <div className="content">
                                <div className="header">
                                    <h3>Sorry, there has been an error contacting the API.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        error: state.error
    }
};
export default connect(mapStateToProps, {getNotes})(App);
