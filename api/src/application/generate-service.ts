import { type FastifyReply, type FastifyRequest } from 'fastify'

// import { IDetailsRequest } from '../domain/interfaces/details/request/request'
import { DetailResponse } from '../domain/models/details/response'
import { DetailRequest } from '../domain/models/details/request'
import { MongoDB } from '../infrastructure/database/mongo-db-atlas'
import IRequestBody from '../domain/interfaces/common/request'
import PDFGenerator from '../infrastructure/PDF/pdf-create'
import { uploadToS3 } from '../infrastructure/AWS/s3/upload'
// import { IDetailsResponse } from '../domain/interfaces/details/response/response'

async function handler(request: FastifyRequest, response: FastifyReply) {
  const parsedBody = request.body as IRequestBody
  const template = request.headers['template'] as string
  const pdfGenerator = new PDFGenerator('output.pdf')
  pdfGenerator.templateChooser(template, parsedBody)

  // const mongo = new MongoDB()

  // try {
  //     const detailRequest = new DetailRequest(parsedBody.fap)

  //     const searchResult = await mongo.extractMessage<IDetailsResponse>(
  //         'details',
  //         {
  //             fap: detailRequest.fap,
  //         },
  //         DetailResponse.mongoSelectedFields(),
  //         true,
  //     )

  //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- parser
  //     const parsedObject: IDetailsResponse = JSON.parse(JSON.stringify(searchResult))

  //     return await response.send({
  //         result: new DetailResponse(parsedObject),
  //     })
  // } catch (error: unknown) {
  //     const parsedError = error as Error

  //     return response.code(400).send(parsedError.message)
  // }
  return await response.code(200).send(parsedBody)
}

export { handler }
