import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchDarkMode } from 'src/app/state/actions/header.action';
import { AppState } from 'src/app/state/app.state';
import { selectDarkMode } from 'src/app/state/selectors/header.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  darkMode$: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.darkMode$ = new Observable();
  }

  ngOnInit(): void {
    this.darkMode$ = this.store.select(selectDarkMode);
  }


  switchMode(): void {
    this.store.dispatch(switchDarkMode());
  }

}
