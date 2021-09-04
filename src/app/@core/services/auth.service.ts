import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromApp from '../stores/app.reducer';
import * as AuthActions from '../stores/auth/auth.actions';
import * as authSelectors from '../stores/auth/auth.selectors';
import * as DashboardActions from '../stores/dashboard/dashboard.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  email: string = null;
  private tokenExpirationTimer: any;
  constructor(private store: Store<fromApp.AppState>) {}

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.pipe(select(authSelectors.getUser)).subscribe((user) => {
        if (user !== null) {
          this.email = user.Email;
        }
      });

      if (this.email !== null) {
        this.store.dispatch(
          new DashboardActions.SetNotification({
            isSuccess: false,
            message: 'Your session has timed out. Logging you out now.',
          })
        );

        setTimeout(() => {
          this.store.dispatch(
            new AuthActions.Logout({
              email: this.email,
            })
          );
        }, 5000);
      }
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
      this.tokenExpirationTimer = null;
    }
  }
}
