import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';
import * as AuthActions from '../auth/auth.actions';
import * as DashboardActions from './dashboard.actions';
import { Router } from '@angular/router';

@Injectable()
export class DashboardEffects {
  constructor(
    private action$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>,
    private router: Router
  ) {}

  private handleAuthentication = (resData) => {
    console.log(resData);
    return { type: 'DUMMY' };
  };

  private handleError = (errorRes) => {
    console.log(errorRes);
    return of(new AuthActions.AuthenticateFail(errorRes));
  };

  /************************DEPARTMENT**********************/
  // @Effect()
  // getDepartments = this.action$.pipe(
  //   ofType(DashboardActions.GET_DEPARTMENTS),
  //   withLatestFrom(this.store.select('auth')),
  //   switchMap(([dashboardData, authState]) => {
  //     return this.http
  //       .get<GetDepartmentsResponseData>(
  //         `https://dev-app-ip.eastus.cloudapp.azure.com:44320/api/Departments/getbyorganizationid/${authState.user.OrganizationId}`
  //       )
  //       .pipe(
  //         map((resData) => {
  //           console.log(resData);
  //           if (resData.succeeded === true) {
  //             return new DashboardActions.SaveDepartments(resData.entity);
  //           } else {
  //             return { type: 'GET DEPARTMENTS FAILED' };
  //           }
  //         }),
  //         catchError((errorRes) => {
  //           return this.handleError(errorRes);
  //         })
  //       );
  //   })
  // );

  // @Effect()
  // createDepartment = this.action$.pipe(
  //   ofType(DashboardActions.CREATE_DEPARTMENT),
  //   withLatestFrom(this.store.select('auth')),
  //   switchMap(
  //     ([dashboardData, authState]: [
  //       DashboardActions.CreateDepartment,
  //       any
  //     ]) => {
  //       console.log({
  //         organizationId: authState.user.OrganizationId,
  //         userId: authState.user.StaffId,
  //         names: dashboardData.payload.names,
  //       });

  //       return this.http
  //         .post<CreateDepartmentResponseData>(
  //           'https://dev-app-ip.eastus.cloudapp.azure.com:44320/api/Departments/create',
  //           {
  //             organizationId: authState.user.OrganizationId,
  //             userId: authState.user.StaffId,
  //             names: dashboardData.payload.names,
  //           }
  //         )
  //         .pipe(
  //           map((resData) => {
  //             console.log(resData);

  //             if (resData.succeeded === true) {
  //               this.store.dispatch(
  //                 new DashboardActions.SetNotification({
  //                   isSuccess: true,
  //                   message: `${dashboardData.payload.names} Department Created Sucessfully`,
  //                 })
  //               );

  //               this.store.dispatch(new DashboardActions.GetDepartments());
  //               return { type: 'Department Created Succesfully' };
  //             } else {
  //               resData.messages.forEach((message, index) => {
  //                 setTimeout(() => {
  //                   this.store.dispatch(
  //                     new DashboardActions.SetNotification({
  //                       isSuccess: false,
  //                       message: message,
  //                     })
  //                   );
  //                 }, index * 3000);
  //               });
  //               return { type: 'Department Creation was Unsucessful' };
  //             }
  //           }),
  //           catchError((errorRes) => {
  //             this.store.dispatch(
  //               new DashboardActions.SetNotification({
  //                 isSuccess: false,
  //                 message: `${dashboardData.payload.names} Department Creation was Unsucessful`,
  //               })
  //             );
  //             return this.handleError(errorRes);
  //           })
  //         );
  //     }
  //   )
  // );

  // @Effect()
  // editDepartment = this.action$.pipe(
  //   ofType(DashboardActions.EDIT_DEPARTMENT),
  //   withLatestFrom(this.store.select('auth')),
  //   switchMap(
  //     ([dashboardData, authState]: [DashboardActions.EditDepartment, any]) => {
  //       console.log({
  //         organizationId: authState.user.OrganizationId,
  //         userId: authState.user.StaffId,
  //         departmentId: dashboardData.payload.departmentId,
  //         name: dashboardData.payload.name,
  //       });

  //       return this.http
  //         .post(
  //           `https://dev-app-ip.eastus.cloudapp.azure.com:44320/api/Departments/update/${dashboardData.payload.departmentId}`,
  //           {
  //             organizationId: authState.user.OrganizationId,
  //             userId: authState.user.StaffId,
  //             departmentId: dashboardData.payload.departmentId,
  //             name: dashboardData.payload.name,
  //           }
  //         )
  //         .pipe(
  //           map((resData) => {
  //             console.log(resData);
  //             this.store.dispatch(new DashboardActions.GetDepartments());

  //             this.store.dispatch(
  //               new DashboardActions.SetNotification({
  //                 isSuccess: true,
  //                 message: `Department Updated Sucessfully`,
  //               })
  //             );

  //             return { type: 'Department Updated Succesfully' };
  //           }),
  //           catchError((errorRes) => {
  //             this.store.dispatch(
  //               new DashboardActions.SetNotification({
  //                 isSuccess: false,
  //                 message: `Department Update was Unsucessful`,
  //               })
  //             );

  //             return this.handleError(errorRes);
  //           })
  //         );
  //     }
  //   )
  // );

  // @Effect()
  // changeDepartmentStatus = this.action$.pipe(
  //   ofType(DashboardActions.CHANGE_DEPARTMENT_STATUS),
  //   withLatestFrom(this.store.select('auth')),
  //   switchMap(
  //     ([dashboardData, authState]: [
  //       DashboardActions.ChangeDepartmentStatus,
  //       any
  //     ]) => {
  //       return this.http
  //         .post(
  //           'https://dev-app-ip.eastus.cloudapp.azure.com:44320/api/Departments/changedepartmentstatus',
  //           {
  //             organizationId: authState.user.OrganizationId,
  //             userId: authState.user.StaffId,
  //             departmentId: dashboardData.payload.departmentId,
  //           }
  //         )
  //         .pipe(
  //           map((resData) => {
  //             console.log(resData);
  //             this.store.dispatch(
  //               new DashboardActions.SetNotification({
  //                 isSuccess: true,
  //                 message: `Department Status Changed Sucessfully`,
  //               })
  //             );

  //             this.store.dispatch(new DashboardActions.GetDepartments());
  //             return { type: 'Change Department Status Successful' };
  //           }),
  //           catchError((errorRes) => {
  //             this.store.dispatch(
  //               new DashboardActions.SetNotification({
  //                 isSuccess: false,
  //                 message: `Department Status Change Unsucessful`,
  //               })
  //             );
  //             return this.handleError(errorRes);
  //           })
  //         );
  //     }
  //   )
  // );
  /*********************************************************/
}
