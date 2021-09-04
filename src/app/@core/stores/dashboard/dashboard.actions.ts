import { Action } from '@ngrx/store';
import { Notification } from '../../interfaces/notification.interface';

/********************CONTRACT-TYPES TYPE********************/
export const GET_CONTRACT_TYPE = '[Dashboard] Get Contract Type';
export const SAVE_CONTRACT_TYPE = '[Dashboard] Save Contract Type';
export const CREATE_CONTRACT_TYPE = '[Dashboard] Create Contract Type';
/********************************************************/

/********************NOTIFCATION TYPE********************/
export const SET_NOTIFCATION = '[Dashboard] Set Notifcation';
export const CLEAR_NOTIFCATION = '[Dashboard] Clear Notifcation';
/********************************************************/

/***********************LOADER TYPE**********************/
export const IS_LOADING = '[Dashboard] Is Loading';
/********************************************************/

/********************DEPARTMENT**************************/
export class GetContractType implements Action {
  readonly type = GET_CONTRACT_TYPE;
}

export class SaveContractType implements Action {
  readonly type = SAVE_CONTRACT_TYPE;
  constructor(public payload: any[]) {}
}

export class CreateContractType implements Action {
  readonly type = CREATE_CONTRACT_TYPE;
  constructor(
    public payload: {
      name: string;
      description: string;
      enableInternalSignatories: boolean;
      numberOfInternalSignatories: number;
      enableExternalSignatories: boolean;
      numberOfExternalSignatories: number;
      enableThirdPartySignatories: boolean;
      numberOfThirdPartySignatories: number;
      enableWitnessSignatories: boolean;
      numberOfWitnessSignatories: number;
      templateFilePath: string;
      userId: string;
    }
  ) {}
}
/********************************************************/

/*********************NOTIFICATION***********************/
export class SetNotification implements Action {
  readonly type = SET_NOTIFCATION;
  constructor(public payload: Notification) {}
}

export class ClearNotification implements Action {
  readonly type = CLEAR_NOTIFCATION;
}
/********************************************************/

/*************************LOADER*************************/
export class IsLoading implements Action {
  readonly type = IS_LOADING;
  constructor(public payload: boolean) {}
}
/********************************************************/

export type DashboardActions = SetNotification | ClearNotification | IsLoading;
