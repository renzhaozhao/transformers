export enum TransfromStatusEnum {
  plane = 0,
  man = 1,
}
export interface DecepticonType {
  name: string
  status: TransfromStatusEnum
}

const Megatron: DecepticonType = {
  name: '威震天',
  status: 1,
}

const Starscream: DecepticonType = {
  name: '红蜘蛛',
  status: 0,
}

const Decepticons: DecepticonType[] = [Megatron, Starscream]

export default Decepticons
