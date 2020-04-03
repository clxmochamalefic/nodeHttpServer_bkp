import Moment from 'moment'
import { v4 as UUID } from 'uuid'
import { IServer } from '../states/IServer'
import {
  ADD_SERVER,
  DELETE_SERVER,
  BOOT_SERVER,
  SHOW_SERVER,
  IAddServerAction,
  IDeleteServerAction,
  IBootServerAction,
  IShowServerListAction
} from './ServerListActions'

/**
 * サーバーリストの表示アクションを作成
 * @param Servers 表示するサーバのリスト 
 */
export const createShowServerAction = (Servers: IServer[]): IShowServerListAction => {
  const dummyServers: IServer[] = [
    {
      id: "0",
      name: "server0",
      port: 80,
      path: "C:\\",
      isRunning: false,
    },
    {
      id: "1",
      name: "server1",
      port: 443,
      path: "C:\\",
      isRunning: false,
    },
    {
      id: "2",
      name: "server2",
      port: 8080,
      path: "C:\\",
      isRunning: true,
    }
  ]

  return {
    // Servers,
    servers: dummyServers,
    type: SHOW_SERVER
  }
}

export const createAddServerAction = (name: string, port: number, path: string): IAddServerAction => {
  return {
    id: UUID(),
    name,
    port,
    path,
    isRunning: false,
    type: ADD_SERVER
  }
}

export const createBootServerAction = (id: string): IBootServerAction => {
  return {
    id,
    type: BOOT_SERVER
  }
}

export const createDeleteServerAction = (id: string): IDeleteServerAction => {
  return {
    id,
    type: DELETE_SERVER
  }
}