import * as DashboardActions from './dashboard.actions';
import { Notification } from '../../interfaces/notification.interface';

export interface State {
  notification: Notification;
  isLoading: boolean;
}

const initialState: State = {
  notification: null,
  isLoading: false,
};

export function dashboardReducer(
  state = initialState,
  action: DashboardActions.DashboardActions
) {
  switch (action.type) {
    /************NOTIFICATION*************/
    case DashboardActions.SET_NOTIFCATION:
      return {
        ...state,
        notification: action.payload,
      };
    case DashboardActions.CLEAR_NOTIFCATION:
      return {
        ...state,
        notification: null,
      };
    /*************************************/

    /****************LOADER***************/
    case DashboardActions.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    /*************************************/
    default:
      return state;
  }
}
