export const newUser = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      minLength: 3,
      maxLength: 100,
    },
    lastName: {
      type: "string",
      minLength: 3,
      maxLength: 100,
    },
    description: {
      type: "string",
      minLength: 3,
      maxLength: 1000,
    },
    password: {
      type: "string",
      minLength: 8,
    },
    email: {
      type: "string",
      format: 'email',
    }
  },
  required: ['firstName', 'lastName', 'password', 'email'],
  additionalProperties: false
}
