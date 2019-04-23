import {
    SHOW_STATUS_MODAL,
    CLOSE_MODAL,
    SHOW_DELETE_CONFIRMATION_MODAL
} from '../../actions/types';

const initialState = {
    show: false,
    type: '',
    props: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_STATUS_MODAL:
            return {
                show: true,
                type: 'status',
                props: action.payload
            };
        case SHOW_DELETE_CONFIRMATION_MODAL:
            return {
                show: true,
                type: 'deleteNoteConfirmation',
                props: action.payload
            };
        case CLOSE_MODAL:
            return initialState;
        default:
            return state;
    }
}
