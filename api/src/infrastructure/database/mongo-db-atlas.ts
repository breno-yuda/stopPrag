import { type Mongoose, Schema, connect, model } from 'mongoose'

import LoggingServices from '../logging/logging-service'
import type IDBService from '../../domain/interfaces/common/mongo-service'
import 'dotenv/config'

export class MongoDB implements IDBService {
  private static instance: Mongoose

  protected logger: LoggingServices

  constructor () {
    this.logger = new LoggingServices(MongoDB.name)
  }

  public async getInstance () {
    if (!MongoDB.instance) {
      MongoDB.instance = await connect(process.env.MONGO_CONNECTION_STRING)
    }
  }

  public async extractMessage<T>(
    modelName: string,
    searchParams?: object,
    selectFields?: string,
    findOne: boolean = false
  ): Promise<T> {
    if (!MongoDB.instance) {
      await this.getInstance()
    }

    const schema = new Schema<T>()

    let Model

    try {
      Model = model<T>(modelName)
    } catch {
      Model = model<T>(modelName, schema)
    }

    if (findOne) {
      const result = await Model.findOne(searchParams)
        .select(selectFields)
        .exec()

      return result as T
    }

    const result = await Model.find(searchParams)
      .select(selectFields)
      .exec()

    return result.map((obj) => {
      return obj.toObject()
    }) as T
  }
}

export default MongoDB
