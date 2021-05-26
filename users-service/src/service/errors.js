export class CustomError extends Error {
  constructor({ message, data, statusCode }) {
    super()
    this.message = message
    this.data = { ...data }
    this.statusCode = statusCode
    Error.captureStackTrace(this, CustomError)
  }
}