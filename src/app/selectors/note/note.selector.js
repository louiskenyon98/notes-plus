import {createSelector} from 'reselect';

const data = (state) => state.notes.data;

export const noteDataSelector = createSelector(
    [data],
    (data) => data
);
