import { Cell } from './cells-types';

export const ADD_CELL = 'AddCell';
export const CLEAR_CELLS = 'ClearCells';

export interface AddCell {
  type: string;
  payload: Cell;
}

export const addCell = (cell: Cell) => ({
    type: ADD_CELL,
    payload: cell.cellName
});

export const clearCells = () => ({
    type: CLEAR_CELLS,
    payload: {}
});

export interface ClearCells {
    type: string;
    payload: {};
}

export type CellsActions = ClearCells | AddCell;
