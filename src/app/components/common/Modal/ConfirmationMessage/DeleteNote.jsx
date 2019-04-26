import React from 'react';
import ConfirmationMessage from "./ConfirmationMessage";

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
