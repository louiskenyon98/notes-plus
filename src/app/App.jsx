import React from 'react';
import Routes from './routes';
import ModalContainer from './containers/common/Modal';

class App extends React.Component {

    render() {
        //Check error prop and only render content if there are no api errors.
        //Using low-level interface "<Router>" to sync custom history.
        return (
            <React.Fragment>
                <Routes/>
                <ModalContainer/>
            </React.Fragment>
        )
    }
}

export default App;
