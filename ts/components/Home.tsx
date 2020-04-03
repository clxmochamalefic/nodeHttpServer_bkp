import React from 'react'
import { connect, MapStateToProps } from 'react-redux'
import { IServerList } from "../states/IServer"
import store, { IState } from '../Store'
import { ServerCard } from "./ServerCard"
import { createBootServerAction, createShowServerAction } from '../actions/ServerListActionCreators'

class Home extends React.Component<IServerList, {}> {
  public componentDidMount() {
    store.dispatch(createShowServerAction([]))
  }
  public render() {
    console.log("Home.render()")
    console.log("servers.count: " + this.props.servers.length)
    const serverElements = this.props.servers.map((it) => {
      return <ServerCard  lblName={it.name}
                          id={it.id}
                          lblPort={it.port}
                          lblPath={it.path}
                          isRunning={it.isRunning}
                          data-id={it.id}
      />

    })
    return (
      serverElements
    )
  }
}

const mapStateToProps = (state: IState): IServerList => {
  console.log(state.serverList.servers.length)
  return state.serverList
}

export default connect(mapStateToProps)(Home)