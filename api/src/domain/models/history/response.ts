/* eslint-disable @typescript-eslint/restrict-template-expressions -- dont need use restrict template expressions */
import S, { type ObjectSchema } from 'fluent-json-schema'

import { Brand } from '../../enums/brand'
import { Origin } from '../../enums/origin'
import { Version } from '../../enums/version'
import { Type } from '../../enums/type'
import { Status } from '../../enums/status'
import { type IHistoryResponse } from '../../interfaces/history/response/response'
import { type IReport } from '../../interfaces/history/response/report'

class HistoryResponse implements IHistoryResponse {
  public readonly cip: string

  public readonly fap: string

  public readonly brand: Brand

  public readonly origin: Origin

  public readonly openingDate: Date

  public readonly version: Version

  public readonly reports: IReport[]

  public readonly covenants: string[]

  public constructor (obj: IHistoryResponse) {
    this.cip = obj.cip
    this.fap = obj.fap
    this.brand = obj.brand
    this.origin = obj.origin
    this.openingDate = obj.openingDate
    this.version = this.defineVersion()
    this.reports = obj.reports
    this.covenants = obj.covenants
  }

  public defineVersion () {
    try {
      if (this.fap === '1') {
        return Version.MOTION
      }

      return Version.V2
    } catch {
      throw new Error('invalido')
    }
  }

  public static mongoSelectedFields () {
    return 'cip fap brand origin openingDate version reports covenants'
  }

  public static schema (): ObjectSchema {
    // console.log(JSON.stringify(querySchemaSample.valueOf(), undefined, 2))
    return S.object()
      .id('/history')
      .description('Expected Response')
      .prop(
        'result',
        S.array().items(
          S.object()
            .prop('cip', S.string())
            .prop('fap', S.string())
            .prop('brand', S.string().enum(Object.values(Brand)))
            .default(`${Object.values(Brand)}`)
            .prop('origin', S.string().enum(Object.values(Origin)))
            .default(`${Object.values(Origin)}`)
            .prop('openingDate', S.string().format(S.FORMATS.DATE))
            .default('YYYY-MM-DD')
            .prop('version', S.string().enum(Object.values(Version)))
            .default(`${Object.values(Version)}`)
            .prop(
              'reports',
              S.array().items(
                S.object()
                  .prop('type', S.string().enum(Object.values(Type)))
                  .default(`${Object.values(Type)}`)
                  .prop('status', S.string().enum(Object.values(Status)))
                  .default(`${Object.values(Status)}`)
                  .prop('title', S.string())
                  .prop(
                    'requester',
                    S.array().items(
                      S.object()
                        .prop('name', S.string())
                        .prop('number', S.string())
                        .prop('type', S.string())
                        .prop('state', S.string())
                    )
                  )
                  .prop(
                    'exams',
                    S.array().items(
                      S.object()
                        .prop('idExam', S.number())
                        .prop('title', S.string())
                    )
                  )
                  .prop('newExamRelease', S.boolean())
                  .prop('token', S.string())
                  .prop('exclusive', S.boolean())
              )
            )
            .prop('covenants', S.array().items(S.string()))
        )
      )
  }
}

export { HistoryResponse }
