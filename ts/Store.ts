import { combineReducers, createStore } from 'redux'
import { ServerCardReducer } from './reducer/ServerCardReducer'
import IServerCard from './states/IServerCard'


/**
 * store のデータ定義
 * プロパティには管理する child_state を指定する
 */
export interface IState {
  ServerCard: IServerCard
}

const combinedReducer = combineReducers<IState>({
  ServerCard: ServerCardReducer,
})

// グローバルオブジェクトとして store を作成
export const store = createStore(combinedReducer)

export default store;