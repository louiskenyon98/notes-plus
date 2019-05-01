import {combineReducers} from 'redux';
import reducers from '../../app/reducers/index';

jest.mock('../../app/reducers/common/index', () => 'common reducer');
jest.mock('../../app/reducers/note/note.reducer', () => 'note reducer');

jest.mock('redux', () => ({
    combineReducers: jest.fn()
}));

describe('reducers', () => {
    it('should call combineReducers with an object of reducers', () => {
        expect(combineReducers).toHaveBeenCalledWith({
            form: expect.anything(),
            notes: 'note reducer',
            common: 'common reducer'
        })
    })
});
