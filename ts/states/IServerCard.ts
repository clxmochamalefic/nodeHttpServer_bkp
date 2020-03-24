export default interface IServerCard {
  name: string
  port: number
  path: string
  isRunning: boolean
}

export const initServerCard: IServerCard = {
  name: '',
  port: 0,
  path: '',
  isRunning: false,
}