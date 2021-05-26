import { CustomError } from '../service/errors'

export const errorHandler = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({ message: err.message, data: err.data })
  next(err)
}

export const notFoundMiddleware = (req, res, next) => {
  const err = new CustomError({ message: 'Route not found', statusCode: 404 })
  next(err)
}