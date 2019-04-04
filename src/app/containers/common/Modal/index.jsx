import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../../actions/common/modal.action';
import Modal from '../../../components/common/Modal/Modal';
import StatusMessage from "../../../components/common/Modal/StatusMessage";
import ConfirmationMessage from "../../../components/common/Modal/ConfirmationMessage";

class ModalContainer extends React.Component {
    returnModal() {
        switch (this.props.modal.type) {
            case 'status':
                return <StatusMessage {...this.props.modal.props}/>;
            case 'confirmation':
                return <ConfirmationMessage {...this.props.modal.props}/>;
        }
    }

    render() {
        return (
            <Modal
                show={this.props.modal.show}
                close={this.props.closeModal}
            >
                {this.returnModal()}
            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.common.modal
    }
};

export default connect(mapStateToProps, {closeModal})(ModalContainer)
