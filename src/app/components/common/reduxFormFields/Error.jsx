import React from 'react';
import PropTypes from 'prop-types';

class Error extends React.PureComponent {
    render() {
        if (this.props.message) {
            return (
                <div className="ui error message">
                    <div className="header">{this.props.message}</div>
                </div>
            )
        }
        return null
    }
}

Error.propTypes = {
    message: PropTypes.string
};

export default Error;
