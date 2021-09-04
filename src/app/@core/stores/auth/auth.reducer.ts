import * as AuthActions from './auth.actions';
import { UserData } from '../../interfaces/userData.interface';

export interface State {
  user: UserData;
  isLoading: boolean;
}

const initialState: State = {
  user: null,
  isLoading: false,
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.REGISTER_START:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActions.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };

    case AuthActions.AUTHENTICATE_SUCCESS:
      let token = action.payload.token;
      let decoded_token = JSON.parse(atob(token.split('.')[1]));
      let user: UserData = JSON.parse(decoded_token.UserEntity);

      return {
        ...state,
        user: user,
        isLoading: false,
      };
    case AuthActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        isLoading: true,
      };
    case AuthActions.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}
