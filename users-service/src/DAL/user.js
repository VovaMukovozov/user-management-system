import { CustomError } from '../service/errors'
import { db } from '../config'
import dbClient from './client'

const { tableName } = db
const selectFields = ['id', 'firstName', 'lastName', 'description', 'email', 'createdAt']


export const createUser = async user => {
  try {
    const result = await dbClient(tableName).insert(user).returning(selectFields)
    return result[0]
  } catch (e){

    if(e.code === '23505') {
      throw new CustomError({
        message: 'Email already exists',
        statusCode: 401,
        data: { reason: e.message },
      })
    }

    if(e.code === '23502') {
      throw new CustomError({
        message: 'Missing not nullabel field',
        statusCode: 401,
        data: { reason: e.message },
      })
    }

    throw e
  }
}

export const getUsers = async ({ limit, sort, sortType, offset }) => {
  return dbClient(tableName)
    .select(selectFields)
    .offset(offset)
    .limit(limit)
    .orderBy(sort, sortType)
}

export const getUsersCount = async () => dbClient(tableName).count('id')