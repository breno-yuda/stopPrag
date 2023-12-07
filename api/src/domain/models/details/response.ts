/* eslint-disable @typescript-eslint/restrict-template-expressions -- dont need use restrict template expressions */
import S, { type ObjectSchema } from 'fluent-json-schema'

import { Version } from '../../enums/version'
import { type IDetailsResponse } from '../../interfaces/details/response/response'
import { type IExams } from '../../interfaces/details/response/exams'
import { Status } from '../../enums/status'

class DetailResponse implements IDetailsResponse {
  public readonly fap: string

  public readonly exams: IExams[]

  public readonly responsibleLabName: string

  public readonly status: string

  public readonly version: Version

  public readonly covenants: string[]

  public constructor (obj: IDetailsResponse) {
    this.fap = obj.fap
    this.exams = obj.exams
    this.responsibleLabName = obj.responsibleLabName
    this.status = obj.status
    this.version = Version.V2
    this.covenants = obj.covenants
  }

  // testar se os campos mongoSelectedFields estao corretos (para o historico tambem)
  public static mongoSelectedFields () {
    return 'fap exams responsibleLabName status covenants'
  }

  public static schema (): ObjectSchema {
    // console.log(JSON.stringify(querySchemaSample.valueOf(), undefined, 2))
    return S.object()
      .id('/detail')
      .description('Expected Response')
      .prop(
        'result',
        S.object()
          .prop('fap', S.string().required())
          .prop(
            'exams',
            S.array().items(
              S.object()
                .prop('name', S.string().required())
                .prop('hasEvolutionaryGraphic', S.boolean())
                .prop('newExamReleased', S.boolean())
                .prop('openingDate', S.string().format(S.FORMATS.DATE).required())
                .default('YYYY-MM-DD')
                .prop('sequence', S.string())
                .prop('id', S.string().required())
                .prop('languages', S.array().items(S.string()))
                .prop(
                  'results',
                  S.array().items(
                    S.object()
                      .prop('sequence', S.integer())
                      .prop('code', S.string().required())
                      .prop('alternativeCode', S.string())
                      .prop('name', S.string().required())
                      .prop(
                        'subResults',
                        S.array().items(
                          S.object()
                            .prop('sequence', S.integer())
                            .prop('type', S.string().required())
                            .prop('code', S.string().required())
                            .prop('alternativeCode', S.string())
                            .prop('name', S.string().required())
                            .prop(
                              'lab',
                              S.object()
                                .prop('type', S.string().required())
                                .prop(
                                  'integrationCode',
                                  S.string().required()
                                )
                                .prop(
                                  'name',
                                  S.string().required()
                                )
                            )
                            .prop('subResults', S.array())
                            .prop(
                              'releaseDate',
                              S.string()
                                .format(S.FORMATS.DATE_TIME)
                                .required()
                            )
                            .default('YYYY-MM-DDT00:00:00')
                            .prop('hasPanic', S.boolean())
                            .prop('hasPartial', S.boolean())
                            .prop('hasGraphic', S.boolean())
                            .prop('statusMotion', S.string().required())
                            .prop(
                              'status',
                              S.string()
                                .enum(Object.values(Status))
                                .required()
                            )
                            .default(`${Object.values(Status)}`)
                            .prop('unformattedValue', S.string())
                            .prop('originalFormattedValue', S.string())
                            .prop(
                              'originalUnformattedValue',
                              S.string()
                            )
                            .prop('inclusiveMin', S.string())
                            .prop('inclusiveMax', S.string())
                            .prop('minValue', S.string())
                            .prop('maxValue', S.string())
                            .prop('measureUnit', S.string())
                            .prop('unformattedMaxValue', S.string())
                            .prop('unformattedMinValue', S.string())
                            .prop('referenceValue', S.string())
                        )
                      )
                      .prop('hasPanic', S.boolean())
                      .prop('hasPartial', S.boolean())
                      .prop('hasGraphic', S.boolean())
                      .prop(
                        'statusMotion',
                        S.string().required()
                        // .enum(Object.values(StatusMotion)),
                      )
                    // .default(`${Object.values(StatusMotion)}`)
                      .prop(
                        'status',
                        S.string().enum(Object.values(Status)).required()
                      )
                      .default(`${Object.values(Status)}`)
                  )
                )
                .prop('status', S.string())
                .prop(
                  'requesters',
                  S.array().items(
                    S.object()
                      .prop('sequence', S.integer())
                      .prop('name', S.string().required())
                      .prop('type', S.string().required())
                      .prop(
                        'state',
                        S.string().minLength(2).maxLength(2).required()
                      )
                      .prop('number', S.string().required())
                  )
                )
                .prop('statusMotion', S.string().required())
            )
          )
          .prop('responsibleLabName', S.string().required())
          .prop('status', S.string().required())
          .prop('version', S.string().enum(Object.values(Version)).required())
          .default(`${Object.values(Version)}`)
          .prop('covenants', S.array().items(S.string()).required())
      )
  }
}

export { DetailResponse }
