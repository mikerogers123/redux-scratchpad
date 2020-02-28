import { combineReducers } from '@ngrx/store';
import { default as cellsReducer } from '../cells/redux/cells-reducer';
import { Reducer, AnyAction } from 'redux';
import { RootState } from './root-state';

export const rootReducer = combineReducers({
    cells: cellsReducer
}) as Reducer<RootState, AnyAction>;
