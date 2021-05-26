import bcrypt from 'bcrypt'
import { createUser as createUserDal, getUsers as getUsersDal, getUsersCount as getUsersCountDal } from '../DAL/user'

export const createUser = async user => {
  const salt = await bcrypt.genSalt(10)
  const password = await bcrypt.hash(user.password, salt)
  const userToSave = { ...user, password, createdAt: new Date()  }
  return createUserDal(userToSave)
}

export const getUsers = async query => {
  const { limit = 10, sort = 'id', sortType = 'desc', offset = 0 } = query
  const users = await getUsersDal({ limit, sort, sortType, offset })
  const total = await getUsersCountDal()
  return {
    users,
    total: parseInt(total[0].count),
  }
}