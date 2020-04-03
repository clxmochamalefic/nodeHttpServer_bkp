import { Action } from 'redux'
import { v4 as UUID } from 'uuid'

/**
 * 実行中ボタンの状態を変更するアクションタイプ
 */ 
export const CLICK_RUN_STATE_BTN = UUID();

/**
 * 実行中ボタンの状態を変更するアクション
 */ 
export interface IClickRunStateBtnAction extends Action {
  id: string
  isRunning: boolean
}