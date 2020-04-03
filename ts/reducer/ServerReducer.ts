import Clone from 'clone'
import Redux from 'redux'

import * as ServerListAction from '../actions/ServerListActions'
import * as ServerAction from '../actions/ServerActions'
import { createServer, initServerList, IServerList } from '../states/IServer'
import createA2RMapper from '../utils/ActionToReducerMapper'

const a2RMapper = createA2RMapper<IServerList>()

/**
 * サーバ一覧を表示
 */
a2RMapper.addWorks<ServerListAction.IShowServerListAction>(
  ServerListAction.SHOW_SERVER,
  (state, action) => {
    state.servers = Clone(action.servers)
  }
)

/**
 * サーバを追加
 */
a2RMapper.addWorks<ServerListAction.IAddServerAction>(
  ServerListAction.ADD_SERVER,
  (state, action) => {
    state.servers.push(createServer(
      action.name,
      action.port,
      action.path,
      action.isRunning
    ))
  }
)

/**
 * サーバの実行を切り替え
 */
a2RMapper.addWorks<ServerListAction.IBootServerAction>(
  ServerListAction.BOOT_SERVER,
  (state, action) => {
    const { servers } = state;
    const target = servers.find((it) => it.id === action.id)
    if (!target) {
      return
    }

    target.isRunning = !target.isRunning
  }
)

a2RMapper.addWorks<ServerAction.IClickRunStateBtnAction>(
  ServerAction.CLICK_RUN_STATE_BTN,
  (state, action) => {
    const { servers } = state;
    const target = servers.find((it) => it.id === action.id)
    if (!target) {
      return
    }

    target.isRunning = action.isRunning
  }
)

/**
 * サーバを削除
 */
a2RMapper.addWorks<ServerListAction.IDeleteServerAction>(
  ServerListAction.DELETE_SERVER,
  (state, action) => {
    const { servers } = state;
    const target = servers.find((it) => it.id === action.id)
    if (!target) {
      return
    }
    state.servers = servers.filter((it) => it.id !== action.id)
  }
)

/**
 * reducer
 * @param state state
 * @param action action
 */
export const ServerReducer: Redux.Reducer<IServerList> = (state = initServerList, action) => {
  return a2RMapper.execute(state, action)
}