import React from 'react';

class Error extends React.PureComponent {
    render() {
        const {message} = this.props;
        if(message) {
            return (
                <div className="ui error message">
                    <div className="header">{message}</div>
                </div>
            )
        }
        return null
    }
}
export default Error;
