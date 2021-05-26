import { validationTypes } from '../config/validator'
import { validate } from '../service/validator/validator'

export const parseIntFields = (req, res, next) => {
  const { query } = req
  if(query.limit) {
    query.limit = parseInt(query.limit)
  }
  if(query.offset) {
    query.offset = parseInt(query.offset)
  }
  next()
}

export default (schema, type) => {
  if(!validationTypes.includes(type)) {
    throw new Error('Invalid validation type')
  }
  return (req, res, next) => {
    const { isValid, errors } = validate(schema, req[type])
    if(!isValid) {
      const err = new Error('Bad request')
      err.statusCode = 400
      err.data = errors
      next(err)
    }
    next()
  }
}