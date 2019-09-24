import { StatusesState } from "../../types"
import { asyncSuffixes } from "../actions/actionsHelpers"

export default (
  state: StatusesState = {
    loadgames: { isRunning: false },
    addgame: { isRunning: false },
    loadgenres: { isRunning: false },
  },
  action: any,
) => {
  const { type, statusKey } = action

  if (type.indexOf(asyncSuffixes.request) !== -1) {
    return { 
      ...state, 
      [statusKey]: {
        error: undefined,
        isRunning: true,
    }}
  }

  if (type.indexOf(asyncSuffixes.success) !== -1) {
    return { 
      ...state, 
      [statusKey]: {
        error: undefined,
        isRunning: false,
        lastUpdated: action.lastUpdated,
    }}
  }

  if (type.indexOf(asyncSuffixes.failure) !== -1) {
    return { 
      ...state, 
      [statusKey]: {
        error: action.error,
        isRunning: false,
        lastUpdated: undefined,
    }}
  }
  
  return state
}
