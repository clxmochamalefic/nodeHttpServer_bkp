import Redux from 'redux'
import { v4 as UUID } from 'uuid'

/**
 * 実行中ボタンの状態を変更するアクションタイプ
 */ 
export const CLICK_RUN_STATE_BTN = UUID();

/**
 * 実行中ボタンの状態を変更するアクション
 */ 
export interface IClickRunStateBtnAction extends Redux.Action {
  isRunning: boolean
}

/**
 * 実行中ボタンの状態を変更するアクションクリエイター
 * @param isRunning 変更する状態
 * @returns 実行中ボタンの状態を変更するアクション
 */
export const createClickRunStateBtnAction: Redux.ActionCreator<IClickRunStateBtnAction> = (isRunning: boolean) => {
  return {
    isRunning,
    type: CLICK_RUN_STATE_BTN,
  }
}