import {createSelector} from 'reselect';


const noteDataSelector = state => state.notes.data;
const filterOptionsSelector = state => state.notes.filterOption;

export const getAllNotesSelector = createSelector(
    noteDataSelector,
    filterOptionsSelector,
    (noteData, filterOptionValue) => {
        let notes = [];
        if (Array.isArray(noteData)) {
            notes = noteData.sort((a, b) => new Date(b[filterOptionValue]) - new Date(a[filterOptionValue]));
        }
        return {
            notes,
        }
    });

