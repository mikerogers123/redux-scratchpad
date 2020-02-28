import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { RootState } from 'src/redux/root-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  message$: Observable<string>;

  constructor(private ngRedux: NgRedux<RootState>) {
    this.message$ = ngRedux.select(state => state.message);
  }
}
