import { createSelector } from '@ngrx/store';
import * as fromApp from '../app.reducer';
import * as fromAuth from '../auth/auth.reducer';

const getAuthState = (state: fromApp.AppState) => state.auth;

export const getUser = createSelector(
  getAuthState,
  (state: fromAuth.State) => state.user
);

export const getAuthIsLoading = createSelector(
  getAuthState,
  (state: fromAuth.State) => state.isLoading
);
