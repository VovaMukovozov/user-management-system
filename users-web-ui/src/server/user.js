import http, { httpRequestDictionary } from './index'

export const getUsers = ({ offset = 0, limit = 2, sort = 'id', sortType = 'asc' } = {}) => {
  return http.get(httpRequestDictionary.users, {
    params: {
      offset,
      limit,
      sort,
      sortType,
    }
  })
}

export const createUser = body => {
  return http.post(httpRequestDictionary.users, body)
}