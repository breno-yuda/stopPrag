// import { withRefResolver } from "fastify-zod"

const swaggerOptions = {
  swagger: {
    info: {
      title: 'My Title',
      description: 'My Description.',
      version: '1.0.0'
    },
    host: '0.0.0.0:3000',
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [{ name: 'Default', description: 'Default' }]
  }
}

const swaggerUiOptions = {
  routePrefix: '/docs',
  exposeRoute: true
}

export { swaggerOptions, swaggerUiOptions }
