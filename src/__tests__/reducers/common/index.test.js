import {combineReducers} from 'redux';
import reducers from '../../../app/reducers/common/index';

jest.mock('../../../app/reducers/common/modal.reducer', () => 'modal reducer');

jest.mock('redux', () => ({
    combineReducers: jest.fn()
}));

describe('reducers', () => {
    it('should call combineReducers with reducers object', () => {
        expect(combineReducers).toHaveBeenCalledWith({
            modal: 'modal reducer'
        })
    })
});
