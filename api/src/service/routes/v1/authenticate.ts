import { type FastifyInstance, type FastifyReply, type FastifyRequest } from 'fastify'

// import { DetailRequest } from '../../../domain/models/details/request'
// import { DetailResponse } from '../../../domain/models/details/response'
import { handler } from '../../../application/generate-service'

export default function authenticateUser (fastify: FastifyInstance, opts: unknown, done: () => void) {
  fastify.get(
    '/login/auth',
    {
      // schema: {
      //     params: DetailRequest.schema(),
      //     response: {
      //         200: DetailResponse.schema(),
      //     },
      // },
    },
    async (req: FastifyRequest, reply: FastifyReply) => {
      await handler(req, reply)
      done()
    }
  )

  done()
}
