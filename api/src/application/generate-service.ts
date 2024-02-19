import { type FastifyReply, type FastifyRequest } from 'fastify'

import IRequestBody from '../domain/interfaces/common/request'
import PDFGenerator from '../infrastructure/PDF/pdf-create'

async function handler(request: FastifyRequest, response: FastifyReply) {
  const parsedBody = request.body as IRequestBody
  const template = request.headers['template-number'] as string
  const pdfGenerator = new PDFGenerator(`pdfs/generated_pdf_${Date.now()}.pdf`)

  try {
    const url = await pdfGenerator.templateChooser(template, parsedBody)
    console.log
    return await response.code(200).send({ expirableUrl: url })
  } catch (error: unknown) {
    const parsedError = error as Error

    return response.code(400).send(parsedError.message)
  }
}

export { handler }
