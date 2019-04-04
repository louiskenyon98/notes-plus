import {createSelector} from 'reselect';
import {LAST_CREATED, LAST_EDITED} from "../../config/filterOptions";

const noteDataSelector = state => state.notes.data;
const filterOptionsSelector = state => state.notes.filterOption;

const getAllNotesSelector = createSelector(
    noteDataSelector,
    filterOptionsSelector,
    (noteData, filterOptionValue) => {
        if (filterOptionValue === LAST_CREATED) {
            noteData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        if (filterOptionValue === LAST_EDITED) {
            noteData.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        }

        return {
            //Must not return a mutated object, hence spread operator.
            notes: [...noteData]
        };
    });

export {
    noteDataSelector,
    getAllNotesSelector
}

