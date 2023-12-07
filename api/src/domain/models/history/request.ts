/* eslint-disable @typescript-eslint/restrict-template-expressions -- dont need use restrict template expressions */
import S, { type ObjectSchema } from 'fluent-json-schema'

import { type IHistoryRequest } from '../../interfaces/history/request/request'
import { type ICip } from '../../interfaces/history/request/cip'
import { type IRequester } from '../../interfaces/history/request/requester'
import { type IHospitalInformation } from '../../interfaces/history/request/hospital-information'
import { Brand } from '../../enums/brand'
import { Origin } from '../../enums/origin'
import { ResumedType } from '../../enums/type'

class HistoryRequest implements IHistoryRequest {
  startDate: Date

  endDate: Date

  requester?: IRequester

  hospitalInformation?: IHospitalInformation

  fapPrefix?: string

  type?: string

  examIds?: string[] | undefined

  cips: ICip[]

  constructor (
    startDate: Date,
    endDate: Date,
    cips: ICip[],
    requester?: IRequester,
    hospitalInformation?: IHospitalInformation,
    fapPrefix?: string,
    type?: string,
    examIds?: string[] | undefined
  ) {
    this.startDate = startDate
    this.endDate = endDate
    this.requester = requester
    this.hospitalInformation = hospitalInformation
    this.fapPrefix = fapPrefix
    this.type = type
    this.examIds = examIds
    this.cips = cips

    if (!this.isEndDateLowerThanStartDate()) {
      throw new Error('End Date is minor than Start Date')
    }
  }

  private isEndDateLowerThanStartDate (): boolean {
    return this.endDate >= this.startDate
  }

  public static schema (): ObjectSchema {
    // console.log(JSON.stringify(querySchemaSample.valueOf(), undefined, 2))
    return S.object()
      .id('/history')
      .title('history endpoint for AC and RDI exams')
      .description('returns history based in Gliese, Motion and Blci')
      .prop('startDate', S.string().format(S.FORMATS.DATE))
      .default('YYYY-MM-DD')
      .prop('endDate', S.string().format(S.FORMATS.DATE))
      .default('YYYY-MM-DD')
      .prop(
        'requester',
        S.object()
          .id('#requester')
          .prop('type', S.string().minLength(3).maxLength(3).required())
          .prop('number', S.number().minimum(1).required())
          .prop('state', S.string().minLength(2).maxLength(2).required())
      )
      .prop(
        'hospitalInformation',
        S.object()
          .id('#hospitalInformation')
          .prop('rghCode', S.number().minimum(1).required())
          .prop('hospitalCode', S.number().minimum(1).required())
          .prop('order', S.number().minimum(1).required())
          .prop('service', S.string().minLength(1).required())
      )
      .prop('fapPrefix', S.string())
      .prop('type', S.string().enum(Object.values(ResumedType)))
      .default(`${Object.values(ResumedType)}`)
      .prop('examIds', S.array())
      .prop(
        'cips',
        S.array().items(
          S.object()
            .prop(
              'brands',
              S.array()
                .items(S.string().enum(Object.values(Brand)))
                .required()
            )
            .default(`${Object.values(Brand)}`)
            .prop(
              'origins',
              S.array()
                .items(S.string().enum(Object.values(Origin)))
                .required()
            )
            .default(`${Object.values(Origin)}`)
            .prop('cip', S.string().minLength(1).required())
        )
      )
      .required()
      .default(`\nbrands: [${Object.values(Brand)}]\norigins: [${Object.values(Origin)}]`)
  }
}

export { HistoryRequest }
