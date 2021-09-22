import React from 'react';
import { ActionTypes } from './action.types';
import { Applicant } from '../../../common types/dto/applicant/applicant.type';
import { Event } from '../../../common types/dto/event/event.type';
import { FilterOptionsDto } from '../../../common types/dto/form-options/filter-options.dto';

export interface IStore {
  events: Event[];
  applicants: Applicant[];
  options: FilterOptionsDto;
  isAuth: boolean;
  isLoading: boolean;
}
export interface IAction {
  type: ActionTypes;
  payload: any;
}

export interface IContext {
  state: IStore;
  dispatch: React.Dispatch<IAction>;
}
