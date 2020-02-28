import { Cell } from './cells-types';
import { CellsActions, ADD_CELL, CLEAR_CELLS } from './cells-actions';

export const rootReducer = (state: ReadonlyArray<Cell>, action: CellsActions) => {
    if (action.type === ADD_CELL) {
        return [...state, ...[{cellName: action.payload}]];
    }

    if (action.type === CLEAR_CELLS) {
        return [];
    }

    return state;
};

export default rootReducer;
