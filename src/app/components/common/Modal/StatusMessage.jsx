import React from 'react';
//:todo rename messagemodal to message, and also create errormessage component
export default class StatusMessage extends React.PureComponent {

    returnTitle() {
        if (this.props.title) {
            return this.props.title;
        }
        if (this.props.status === 'success') {
            return 'Successful'
        }
        if (this.props.status === 'fail') {
            return 'Sad times'
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.returnTitle()}</h1>
                {this.props.body}
            </React.Fragment>
        )
    }
}
