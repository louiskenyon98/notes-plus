import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../../actions/common/modal.action';
import Modal from '../../../components/common/Modal';
import HelloWorld from "../../../components/common/Modal/HelloWorld";

import styles from '../../../../themes/style.scss';

class ModalContainer extends React.Component {
    returnModal() {
        switch (this.props.modal.type) {
            case 'helloWorld':
                return <HelloWorld {...this.props.modal.props}/>
            case 'helloWorld123123':
                return <HelloWorld/>
            case 'dfgsdg':
                return <HelloWorld/>
            case '242342':
                return <HelloWorld/>
            case '234234':
                return <HelloWorld/>
        }
    }

    render() {
        return (
            <React.Fragment>
                <Modal
                    show={this.props.modal.show}
                    close={this.props.closeModal}
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
