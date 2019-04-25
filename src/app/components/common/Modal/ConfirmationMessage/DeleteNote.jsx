import React from 'react';
import PropTypes from 'prop-types';
import ConfirmationMessage from "./index";

export default class DeleteNote extends React.PureComponent {
    render() {
        return (
            <ConfirmationMessage
                title={"Are you sure you want to delete your note"}
                body={"Hello world"}
                decline={{
                    label: "CANCEL",
                    onClick: this.props.cancel
                }}
                accept={{
                    label: "DELETE",
                    onClick: this.props.delete
                }}
            />
        )
    }
}
DeleteNote.propTypes = {
    cancel: PropTypes.func,
    delete: PropTypes.func
};
