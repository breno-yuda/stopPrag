/* eslint-disable @typescript-eslint/no-floating-promises -- server doesnt support ECNext  */
import { type FastifyInstance } from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import 'dotenv/config'

import { swaggerOptions, swaggerUiOptions } from './swagger/swagger-options'
import generateDocs from './routes/v1/generatedocs'
import authenticate from './routes/v1/authenticate'
import editDocs from './routes/v1/editdocs'

export default class App {
  public startup(fastify: FastifyInstance) {
    // Register @fastify/swagger plugin.
    fastify
      .register(fastifySwagger, swaggerOptions)
      .register(fastifySwaggerUi, swaggerUiOptions)
      .register(authenticate)
      .register(editDocs)
      .register(generateDocs)
  }
}
