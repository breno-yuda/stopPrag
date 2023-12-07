import 'reflect-metadata'
import './shared/dependency-injection'
import Fastify, { type FastifyInstance } from 'fastify'
import { container } from 'tsyringe'
import * as qs from 'qs'

import App from './app'

function server () {
  const fastify: FastifyInstance = Fastify({
    ajv: {
      customOptions: {
        keywords: ['collectionFormat']
      }
    },
    querystringParser: (str) => qs.parse(str),
    logger: true
  })

  const app = container.resolve(App)

  app.startup(fastify)

  fastify.listen(
    { port: Number(process.env.PORT) || 3000, host: '0.0.0.0' },
    (error: Error | null, address: string) => {
      if (error) {
        fastify.log.error(error)
        throw error
      }

      fastify.swagger()
      fastify.log.info(address)
    }
  )
}

server()
