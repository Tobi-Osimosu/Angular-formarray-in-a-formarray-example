import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import * as DashboardActions from '../dashboard/dashboard.actions';
import * as fromApp from '../app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponseData } from '../../interfaces/login.interface';

@Injectable()
export class AuthEffects {
  bearer_token: string;
  expiryDate: number;
  expirationDuration;

  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>,
    private http: HttpClient,
    private router: Router
  ) {}

  private handleAuthentication = (resData) => {
    console.log(resData);
    return { type: 'DUMMY' };
  };

  private handleError = (errorRes) => {
    console.log(errorRes);

    this.store.dispatch(
      new DashboardActions.SetNotification({
        isSuccess: false,
        message: 'Connection error! Please contact Revent Support',
      })
    );

    return of(new AuthActions.AuthenticateFail(errorRes));
  };

  @Effect()
  onyxAuth = this.actions$.pipe(
    ofType(AuthActions.ONYX_AUTH),
    switchMap((authData: AuthActions.OnyxAuth) => {
      /****If the Onyx_auth does not exist in localStorage****/
      if (localStorage.getItem('Onyx_auth') === null) {
        return this.http
          .post<LoginResponseData>(
            `${environment.onyxUrl1}/api/ApplicationAuth/login`,
            environment.onyxAuth
          )
          .pipe(
            map((resData) => {
              console.log(resData);

              if (resData.isSuccess === true) {
                this.bearer_token = resData.token.accessToken;

                this.expiryDate =
                  new Date(resData.token.expiresIn * 60000).getTime() +
                  new Date().getTime();

                this.setOnyxAuth();

                this.store.dispatch(
                  new DashboardActions.SetNotification({
                    isSuccess: true,
                    message: `Welcome to Onyx`,
                  })
                );

                return { type: 'Successfully received application token' };
              } else {
                this.store.dispatch(
                  new DashboardActions.SetNotification({
                    isSuccess: false,
                    message: `Error retrieving application token. Please contact Revent Support`,
                  })
                );
                return new AuthActions.AuthenticateFail(resData);
              }
            }),
            catchError((errorRes) => {
              return this.handleError(errorRes);
            })
          );
      } else {
        /*************************If the Onyx_auth exists in localStorage*************************/
        const onyxData: { exp: number; token: string } = JSON.parse(
          localStorage.getItem('Onyx')
        );

        const onyxAuthData: {
          bearer_token: string;
          expiryDate: number;
        } = JSON.parse(localStorage.getItem('Onyx_auth'));

        /****If the Onyx_auth exists in localStorage but the token has expired****/
        if (onyxAuthData.expiryDate < new Date().getTime()) {
          localStorage.removeItem('Onyx_auth');

          if (onyxData) {
            localStorage.removeItem('Onyx');
          }

          this.store.dispatch(
            new DashboardActions.SetNotification({
              isSuccess: false,
              message: `Your previous session timed out. Please login again.`,
            })
          );

          return of({
            type: 'Application token has expired and has been removed from localStorage',
          });
        } else {
          /****If the Onyx_auth exists in localStorage and the token has not expired****/
          this.bearer_token = onyxAuthData.bearer_token;

          this.expiryDate = onyxAuthData.expiryDate;

          this.setOnyxAuth();

          this.store.dispatch(
            new DashboardActions.SetNotification({
              isSuccess: true,
              message: `Welcome back to Onyx`,
            })
          );

          return of({ type: 'Application token still exists in localStorage' });
        }
      }
    })
  );

  setOnyxAuth() {
    localStorage.setItem(
      'Onyx_auth',
      JSON.stringify({
        bearer_token: this.bearer_token,
        expiryDate: this.expiryDate,
      })
    );

    this.store.dispatch(
      new AuthActions.UpdateBearerTokenStatus({ status: true })
    );

    this.expirationDuration = this.expiryDate - new Date().getTime();
  }

  @Effect()
  authRegister = this.actions$.pipe(
    ofType(AuthActions.REGISTER_START),
    switchMap((authData: AuthActions.RegisterStart) => {
      return this.http.post('URL', {}).pipe(
        map((resData) => {
          if ('Condition') {
            console.log(resData);
            return { type: 'DUMMY' };
          } else {
            return { type: 'DUMMY' };
          }
        }),
        catchError((errorRes) => {
          // return this.handleError(errorRes);
          return of({ type: 'DUMMY' });
        })
      );
    })
  );
}
