import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { RootState } from 'src/redux/root-state';
import { Observable } from 'rxjs';
import { Cell } from 'src/cells/redux/cells-types';
import { addCell, clearCells } from 'src/cells/redux/cells-actions';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  cells$: Observable<ReadonlyArray<Cell>>;

  cellName: string;

  constructor(private ngRedux: NgRedux<RootState>) {
    this.cells$ = ngRedux.select(s => s.cells);
  }

  addCell() {
    this.ngRedux.dispatch(addCell({ cellName: this.cellName }));
  }

  clear() {
    this.ngRedux.dispatch(clearCells());
  }
}
