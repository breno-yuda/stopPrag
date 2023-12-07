// eslint-disable-next-line @typescript-eslint/consistent-type-definitions -- interface
interface IDBService {
  getInstance: () => void
  extractMessage: <T>(modelName: string, searchParams?: object, selectFields?: string) => Promise<T>
}

export default IDBService
