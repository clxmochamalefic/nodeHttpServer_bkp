import Redux from 'redux'
import { CLICK_RUN_STATE_BTN, IClickRunStateBtnAction } from './ServerActions'
import { IServer } from '../states/IServer'


/**
 * 実行中ボタンの状態を変更するアクションクリエイター
 * @param isRunning 変更する状態
 * @returns 実行中ボタンの状態を変更するアクション
 */
export const createClickRunStateBtnAction: Redux.ActionCreator<IClickRunStateBtnAction> = (id: string, isRunning: boolean) => {
  return {
    id,
    isRunning,
    type: CLICK_RUN_STATE_BTN,
  }
}