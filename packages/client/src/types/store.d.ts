import React from 'react';
import { ActionTypes } from '../context/action.types';
import { IApplicant } from './applicant';
import { IEvent } from './event';

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
