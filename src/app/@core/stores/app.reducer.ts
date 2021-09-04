import * as fromAuth from "./auth/auth.reducer";
import * as fromDashboard from "./dashboard/dashboard.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  auth: fromAuth.State;
  dashboard: fromDashboard.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  dashboard: fromDashboard.dashboardReducer,
};
