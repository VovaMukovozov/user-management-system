import Ajv from 'ajv'
import addFormats from 'ajv-formats'

const ajv = new Ajv({
  allErrors: true,
  allowUnionTypes: true,
})

addFormats(ajv)

const validator = (schema, data) => {
  const validate = ajv.compile(schema)
  return {
    isValid: validate(data),
    errors: validate.errors,
  }
}

export default validator