import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
} from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { NotificationComponent } from './@components/notification/notification.component';
import * as fromApp from './@core/stores/app.reducer';
import * as AuthActions from './@core/stores/auth/auth.actions';
import * as authSelectors from './@core/stores/auth/auth.selectors';
import * as DashboardActions from './@core/stores/dashboard/dashboard.actions';
import * as dashboardSelectors from './@core/stores/dashboard/dashboard.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  notificationSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.store.dispatch(new AuthActions.OnyxAuth());

    let tokenString = localStorage.getItem('Onyx');
    this.store.dispatch(
      new AuthActions.AuthenticateSuccess({ token: tokenString })
    );

    window.addEventListener('online', () => {
      this.openSnackBar("You're back online", 'notification-success');
    });

    window.addEventListener('offline', () => {
      this.store.dispatch(new AuthActions.IsLoading(false));
      this.store.dispatch(new DashboardActions.IsLoading(false));

      this.openSnackBar("You're offline", 'notification-danger');
    });

    this.notificationSub = this.store
      .pipe(select(dashboardSelectors.getNotification))
      .subscribe((notification) => {
        if (notification !== null) {
          if (notification.isSuccess === true) {
            this.openSnackBar(notification.message, 'notification-success');
          } else if (notification.isSuccess === false) {
            this.openSnackBar(notification.message, 'notification-danger');
          }
        }
      });
  }

  openSnackBar(message, notificationClass) {
    let snackBarRef = this.snackBar.openFromComponent(NotificationComponent, {
      data: message,
      duration: 15000,
      panelClass: [notificationClass],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });

    snackBarRef.afterDismissed().subscribe(() => {
      this.store.dispatch(new DashboardActions.ClearNotification());
    });
  }

  ngOnDestroy() {
    if (this.notificationSub) {
      this.notificationSub.unsubscribe();
    }
  }
}
