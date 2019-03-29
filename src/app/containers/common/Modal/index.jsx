import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../../actions/common/modal.action';
import Modal from '../../../components/common/Modal';
import MessageModal from "../../../components/common/Modal/MessageModal";

class ModalContainer extends React.Component {
    returnModal() {
        switch (this.props.modal.type) {
            case 'helloWorld':
                return <MessageModal {...this.props.modal}/>
            case 'successModal':
                return <MessageModal {...this.props.modal}/>
            case 'dfgsdg':
                return <MessageModal/>
            case '242342':
                return <MessageModal/>
            case '234234':
                return <MessageModal/>
        }
    }

    render() {
        return (
            <React.Fragment>
                <Modal
                    show={this.props.modal.show}
                    close={this.props.closeModal}
                    title={this.props.modal.type}
                >
                    {this.returnModal()}
                </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.common.modal
    }
};

export default connect(mapStateToProps, {closeModal})(ModalContainer)
