import React from 'react'
import { connect, MapStateToProps } from 'react-redux'
import IServerCard from "../states/IServerCard"
import store, { IState } from '../Store'
import { ServerCard } from "./ServerCard"
import { createClickRunStateBtnAction } from '../actions/ServerCardEvents'

class Home extends React.Component<IServerCard, {}> {
  public render() {
    return (
      <ServerCard lblName={this.props.name}
                  lblPort={this.props.port}
                  lblPath={this.props.path}
                  isRunning={this.props.isRunning}
                  onClickRunningButton={this._onClickRunningButton}
      />
    )
  }

  private _onClickRunningButton = () => {
    store.dispatch(createClickRunStateBtnAction(!this.props.isRunning))
  }
}

const mapStateToProps = (state: IState) => {
  return state.ServerCard
}

export default connect(mapStateToProps)(Home)