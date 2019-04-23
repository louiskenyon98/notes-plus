import React from 'react';
import {
    showSuccessModal,
    showFailModal,
    closeModal,
    showDeleteNoteConfirmationModal
} from '../../../app/actions/common/modal.action';
import {
    SHOW_STATUS_MODAL,
    CLOSE_MODAL, SHOW_DELETE_CONFIRMATION_MODAL
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
    describe('showDeleteConfirmationModal', () => {
        const expectedAction = {
            type: SHOW_DELETE_CONFIRMATION_MODAL,
            payload: {
                id: 91
            }
        };
        dispatch(showDeleteNoteConfirmationModal(91));
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
    describe('closeModal', () => {
        const expectedAction = {
            type: CLOSE_MODAL
        };
        dispatch(closeModal());
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    })
});
