import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import { sortableFields, sortTypes } from '../../config/validator'

const ajv = new Ajv({
  allErrors: true,
  allowUnionTypes: true,
})

addFormats(ajv)

ajv.addFormat("sortable", {
  type: "string",
  validate: value => sortableFields.includes(value),
})

ajv.addFormat("sort-type", {
  type: "string",
  validate: value => sortTypes.includes(value),
})

export const validate = (schema, data) => {
  const validate = ajv.compile(schema)
  return {
    isValid: validate(data),
    errors: validate.errors,
  }
}