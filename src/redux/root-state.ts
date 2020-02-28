import { Cell } from 'src/cells/redux/cells-types';

export type RootState = Readonly<{
    cells: ReadonlyArray<Cell>
}>;

export const INITIAL_STATE: RootState = {
    cells: []
};
