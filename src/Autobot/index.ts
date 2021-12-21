export enum TransfromStatusEnum {
  car = 0,
  man = 1,
}
export interface AutoBotType {
  name: string
  status: TransfromStatusEnum
}

const OptimusPrime: AutoBotType = {
  name: '擎天柱',
  status: 1,
}

const Bumblebee: AutoBotType = {
  name: '大黄蜂',
  status: 0,
}

const Autobots: AutoBotType[] = [OptimusPrime, Bumblebee]

export default Autobots
