import React from 'react';
import Routes from './routes';

class App extends React.Component {

    render() {
        //Check error prop and only render content if there are no api errors.
        //Using low-level interface "<Router>" to sync custom history.
        return (
            <Routes/>
        )
    }
}

export default App;
