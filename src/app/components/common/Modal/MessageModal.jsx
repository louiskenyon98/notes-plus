import React from 'react';
//:todo rename messagemodal to message, and also create errormessage component
export default class MessageModal extends React.PureComponent {
    render() {
        return (
            <div>
                {this.props.props.message}
            </div>
        )
    }
}
