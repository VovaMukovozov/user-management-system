import pino from 'pino'
import pinoHttp from 'pino-http'
import prettifier from 'pino-pretty'

const logger = pino({
  prettyPrint: {
    levelFirst: true,
    colorize: true,
  },
  prettifier,
})

export const pinoForHttp = pinoHttp({
  logger,
  customLogLevel: (res, err) => {
    if (res.statusCode >= 400 && res.statusCode < 500) {
      return 'warn'
    } else if (res.statusCode >= 500 || err) {
      return 'error'
    }
    return 'info'
  }
})

export default logger