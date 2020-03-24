import React from 'react'

interface IProps {
  lblName: string
  lblPort: number
  lblPath: string
  isRunning: boolean
  onClickRunningButton: () => void
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
    this.props.onClickRunningButton();
  }
}