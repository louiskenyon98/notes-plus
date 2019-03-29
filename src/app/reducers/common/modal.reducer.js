import {
    SHOW_MESSAGE_MODAL,
    CLOSE_MODAL
} from "../../actions/types";

const initialState = {
    show: false,
    type: '',
    props: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        // case SHOW_MODAL:
        //     return {
        //         modalType: action.modalType,
        //         modalContent: action.modalContent
        //     };
        case SHOW_MESSAGE_MODAL:
            return {
                show: true,
                type: 'helloWorld',
                props: action.payload
            };
        case CLOSE_MODAL:
            return initialState;
        default: return state;
    }
}
