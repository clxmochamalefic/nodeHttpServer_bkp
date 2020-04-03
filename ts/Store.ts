import { combineReducers, createStore } from 'redux'
import { ServerReducer } from './reducer/ServerReducer'
import { IServerList } from './states/IServer'


/**
 * store のデータ定義
 * プロパティには管理する child_state を指定する
 */
export interface IState {
  serverList: IServerList
}

const combinedReducer = combineReducers<IState>({
  serverList: ServerReducer,
})

// グローバルオブジェクトとして store を作成
export const store = createStore(combinedReducer)

export default store;