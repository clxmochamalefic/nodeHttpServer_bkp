import Clone from 'clone'
import Redux from 'redux'

import { CLICK_RUN_STATE_BTN, IClickRunStateBtnAction } from '../actions/ServerCardEvents'
import IServerCard, { initServerCard } from '../states/IServerCard'

export const ServerCardReducer: Redux.Reducer<IServerCard> = (childState = initServerCard, action) => {
  let newChildState: IServerCard = childState
  switch (action.type) {
    case  CLICK_RUN_STATE_BTN:
      {
        newChildState = Clone(childState)
        newChildState.isRunning = (action as IClickRunStateBtnAction).isRunning
      }
      break;
  }

  return newChildState
}