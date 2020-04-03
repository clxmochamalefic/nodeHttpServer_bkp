import { v4 as UUID } from 'uuid'

export interface IServer {
  id: string
  name: string
  port: number
  path: string
  isRunning: boolean
}

export interface IServerList {
  servers: IServer[]
}

export const initServerList: IServerList = {
  servers: [],
}

export const createServer = (name: string, port: number, path: string, isRunning: boolean): IServer => {
  return {
    id: UUID(),
    name,
    port,
    path,
    isRunning,
  }
}