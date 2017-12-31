

import { Action } from '@ngrx/store';

export interface VideoBlock {
  ytId: string;
}


export const UPDATE  = '[VideoBlock] Update';

export class Update implements Action {
  public readonly type = UPDATE;
  constructor(public payload: {ytId: string}) { }
}
export type Types = Update;


export function videoReducer(state: any, action: Types) {
  switch (action.type) {
    case UPDATE:
      return { state, ...action.payload};
    default:
      return state;
  }
}

export const selectFeature = (state: any) => state.profile;
