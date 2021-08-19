import React from 'react';
import { ActionTypes } from '../context/action.types';
import { IApplicant } from '../../../common types/dto/applicant/applicant';
import { IEvent } from '../../../common types/dto/event/event';

export interface IStore {
  events: IEvent[];
  applicants: IApplicant[];
  isAuth: boolean;
}
export interface IAction {
  type: ActionTypes;
  payload: any;
}

export interface IContext {
  state: IStore;
  dispatch: React.Dispatch<IAction>;
}
