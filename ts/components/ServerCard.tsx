import React from 'react'
import { createClickRunStateBtnAction } from '../actions/ServerActionCreators'
import store from '../Store'

interface IProps {
  id: string
  lblName: string
  lblPort: number
  lblPath: string
  isRunning: boolean
}

export class ServerCard extends React.Component<IProps, {}> {
  public render() {
    return (
      <div>
        <button name="isRunning"
                onClick={this._onClickRunningButton}
        >
          { this.props.isRunning ? "Running" : "Stopped" }
          </button>
        <div>
          <p>{ this.props.lblName } : { this.props.lblPort }</p>
          <p>{ this.props.lblPath }</p>
        </div>
      </div>
    )
  }

  private _onClickRunningButton = () => {
    store.dispatch(createClickRunStateBtnAction(this.props.id, !this.props.isRunning))
  }
}