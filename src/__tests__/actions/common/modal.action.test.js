import React from 'react';
import {
    showSuccessModal,
    showFailModal,
    showDeleteNoteConfirmationModal
} from '../../../app/actions/common/modal.action';
import {
    SHOW_STATUS_MODAL
} from '../../../app/actions/types';

let dispatch = jest.fn((objOrFunc) => {
    return typeof objOrFunc === 'function' ? objOrFunc(dispatch) : objOrFunc
});

const details = {
    title: 'Details Title',
    body: 'Details Body'
};

beforeEach(() => {
    jest.clearAllMocks();
});

describe('modal actions', () => {
    describe('showSuccessModal', () => {
        it('should dispatch SHOW_STATUS_MODAL with status of success', () => {
            const expectedAction = {
                type: SHOW_STATUS_MODAL,
                payload: {
                    status: 'success',
                    ...details
                }
            };
            dispatch(showSuccessModal(details));
            expect(dispatch).toHaveBeenCalledWith(expectedAction);
        });
    });
    describe('showFailModal', () => {
        it('should dispatch SHOW_STATUS MODAL with status of fail', () => {
            const expectedAction = {
                type: SHOW_STATUS_MODAL,
                payload: {
                    status: 'fail',
                    ...details
                }
            };
            dispatch(showFailModal(details));
            expect(dispatch).toHaveBeenCalledWith(expectedAction);
        });
    });
});
