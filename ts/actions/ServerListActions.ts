import { Action, bindActionCreators } from 'redux'
import { v4 as UUID } from 'uuid'
import { IServer } from '../states/IServer'

/**
 * サーバ一覧を表示する
 */
export const SHOW_SERVER = UUID()

/**
 * サーバ一覧を表示するアクション
 */
export interface IShowServerListAction extends Action {
  servers: IServer[]
}

/**
 * サーバを追加するアクションタイプ
 */
export const ADD_SERVER = UUID()

/**
 * サーバを追加するアクション
 */
export interface IAddServerAction extends Action {
  id: string
  name: string
  port: number
  path: string
  isRunning: boolean
}

/**
 * サーバを起動するアクションタイプ
 */
export const BOOT_SERVER = UUID()

/**
 * サーバを起動するアクション
 */
export interface IBootServerAction extends Action {
  id: string
}

/**
 * サーバを削除するアクションタイプ
 */
export const DELETE_SERVER = UUID()

/**
 * サーバを起動するアクション
 */
export interface IDeleteServerAction extends Action {
  id: string
}