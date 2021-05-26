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

export const queryUser = {
  type: "object",
  properties: {
    offset: {
      type: ["number"],
      minimum: 0,
    },
    limit: {
      type: "number",
      minimum: 1,
    },
    sort: {
      type: "string",
      format: 'sortable'
    },
    sortType: {
      type: "string",
      format: 'sort-type'
    },
  },
  additionalProperties: false
}