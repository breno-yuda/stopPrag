// eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- interface
interface IRequester {
  name: string

  number: string

  type: string

  state: string
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- interface
interface IRequesterDetails extends IRequester {
  sequence: number
}

export type { IRequester, IRequesterDetails }
