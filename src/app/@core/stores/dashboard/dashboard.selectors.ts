import { createSelector } from '@ngrx/store';
import * as fromApp from '../app.reducer';
import * as fromDashboard from '../dashboard/dashboard.reducer';

const getDashboardState = (state: fromApp.AppState) => state.dashboard;

export const getNotification = createSelector(
  getDashboardState,
  (state: fromDashboard.State) => state.notification
);

export const getDashboardIsLoading = createSelector(
  getDashboardState,
  (state: fromDashboard.State) => state.isLoading
);
