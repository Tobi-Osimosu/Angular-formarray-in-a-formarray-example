import { Action } from '@ngrx/store';

export const ONYX_AUTH = '[Auth] Onyx Auth';
export const UPDATE_BEARER_TOKEN_STATUS = '[Auth] Update Bearer Token Status';

export const REGISTER_START = '[Auth] Register Start';
export const LOGIN_START = '[Auth] Login Start';
export const AUTHENTICATE_SUCCESS = '[Auth] Authenticate Success';
export const AUTHENTICATE_FAIL = '[Auth] Authenticate Fail';
export const LOGOUT = '[Auth] Logout';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const AUTO_LOGOUT = '[Auth] Auto Logout';

export const IS_LOADING = '[Auth] Is Loading';

export class OnyxAuth implements Action {
  readonly type = ONYX_AUTH;
}

export class UpdateBearerTokenStatus implements Action {
  readonly type = UPDATE_BEARER_TOKEN_STATUS;
  constructor(
    public payload: {
      status: boolean;
    }
  ) {}
}

export class RegisterStart implements Action {
  readonly type = REGISTER_START;
  constructor(public payload: {}) {}
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;
  constructor(public payload: {}) {}
}

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;
  constructor(
    public payload: {
      token: string;
    }
  ) {}
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;
  constructor(public payload: {}) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(public payload: {}) {}
}

export class IsLoading implements Action {
  readonly type = IS_LOADING;
  constructor(public payload: boolean) {}
}

export type AuthActions =
  | OnyxAuth
  | UpdateBearerTokenStatus
  | RegisterStart
  | LoginStart
  | AuthenticateSuccess
  | AuthenticateFail
  | Logout
  | IsLoading;
