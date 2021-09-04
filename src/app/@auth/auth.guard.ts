import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as fromApp from './../@core/stores/app.reducer';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
  constructor(private store: Store<fromApp.AppState>, private router: Router) {}
}
