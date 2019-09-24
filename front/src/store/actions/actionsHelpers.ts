import { AnyAction, Dispatch } from 'redux'
import { AsyncTypes } from '../../types'

export const asyncSuffixes: AsyncTypes = {
  request: '_REQUEST',
  success: '_SUCCESS',
  failure: '_FAILURE',  
}

export const makeAsyncTypes = (name: string): AsyncTypes => {
  const statusKey: string = name.toLocaleLowerCase().split('_').join('')

  return {
    request: `${name}${asyncSuffixes.request}`,
    success: `${name}${asyncSuffixes.success}`,
    failure: `${name}${asyncSuffixes.failure}`,
    statusKey
  }
}

export const makeAsyncActionCreator = (type: string, statusKey: string, ...argNames: any[]) => {
  return (...args: any[]): AnyAction => {
    const action: AnyAction = { type, statusKey }

    if (type.indexOf(asyncSuffixes.request) !== -1)
      action.lastUpdated = undefined

    if (type.indexOf(asyncSuffixes.success) !== -1 || type.indexOf(asyncSuffixes.failure) !== -1)
      action.lastUpdated = Date.now()

    for (let index = 0; index < argNames.length; index++) {
      action[argNames[index]] = args[index]
    }

    return action
  }
}

export const makeAsyncAction = (
    types: AsyncTypes, 
    apiCall: (...argsNames: any[]) => Promise<any>,
    additionalSuccessArgs: string[] = [],
    additionalActions: any[] = []
  ) => {
  const request = makeAsyncActionCreator(types.request, types.statusKey)
  const success = makeAsyncActionCreator(types.success, types.statusKey, 'payload', ...additionalSuccessArgs)
  const failure = makeAsyncActionCreator(types.failure, types.statusKey, 'error')

  return (...args: any[]) => {
    return async (dispatch: Dispatch<AnyAction>): Promise<AnyAction> => {     
      dispatch(request())

      try {
        const payload = await apiCall(...args)

        for (const action of additionalActions) {
          dispatch(action(...args))
        }

        return dispatch(success(payload, ...args))
      } catch (error) {
        return dispatch(failure(error))
      }
    }
  }
}
