import Clone from 'clone'
import { Action } from 'redux'

type WorkOfAction<S, A extends Action = any> = (state: S, action: A) => void

/**
 * actionに対するreducerの処理を管理する
 */
class ActionToReducerMapper<S> {
  /**
   * アクションタイプと処理の定義を保持
   */
  private works: {[actionKey: string]: WorkOfAction<S>} = {}

  /**
   * アクションタイプと処理の定義を追加
   */
  public addWorks = <A extends Action>(actionType: string, func: WorkOfAction<S, A>) => {
    this.works[actionType] = func
  }

  /**
   * 処理を実行
   * 該当するアクションタイプがあった場合、stateをクローンして処理を行って返す
   * 該当するアクションタイプが無い場合、何も処理を行わず、stateもクローンせずにそのまま返す
   */
  public execute = (state: S, action: Action) => {
    let newState = state
    const process = this.works[action.type]
    if (!!process) {
      newState = Clone(state)
      process(newState, action)
    }

    return newState
  }
}

const createActionToReducerMapper = <S>() => {
  return new ActionToReducerMapper<S>()
}

export default createActionToReducerMapper