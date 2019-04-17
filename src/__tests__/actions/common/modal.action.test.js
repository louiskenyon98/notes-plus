import React from 'react';
import {
    showSuccessModal,
    showFailModal,
    showDeleteNoteConfirmationModal
} from '../../../app/actions/common/modal.action';
import {
    SHOW_CONFIRMATION_MODAL,
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
    describe('showDeleteNoteConfirmationModal', () => {
        it('should show confirmation modal', () => {
            const expected = {
                type: SHOW_CONFIRMATION_MODAL,
                payload: {
                    body: 'Do you want to delete this note',
                    accept: {
                        label: 'YES',
                        callback: expect.anything()
                    },
                    decline: {
                        label: 'NO',
                        callback: expect.anything()
                    }
                }
            };
            dispatch(showDeleteNoteConfirmationModal(91));
            expect(dispatch).toHaveBeenNthCalledWith(2, expected);
            expect(dispatch).toMatchSnapshot();
        });
    });
});
