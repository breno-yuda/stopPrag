import S, { type ObjectSchema } from 'fluent-json-schema'

import { type IDetailsRequest } from '../../interfaces/details/request/request'

class DetailRequest implements IDetailsRequest {
  fap: string

  constructor (fap: string) {
    this.fap = fap
  }

  public static schema (): ObjectSchema {
    // console.log(JSON.stringify(querySchemaSample.valueOf(), undefined, 2))
    return S.object()
      .id('/detail')
      .title('detailed fap endpoint for AC and RDI exams')
      .description('returns history based in Gliese, Motion and Blci')
      .prop('fap', S.string().required())
  }
}

export { DetailRequest }
