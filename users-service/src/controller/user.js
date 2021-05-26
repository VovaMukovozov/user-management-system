import { createUser as createUserService, getUsers as getUsersService } from '../service/user'

export const getUsers = async (req, res, next) => {
  try{
    const { query } = req
    const users = await getUsersService(query)
    res.json(users)
  } catch (e) {
    next(e)
  }
}

export const createUser = async (req, res, next) => {
  try{
    const { body } = req
    const user = await createUserService(body)
    res.status(201).json(user)
  } catch (e) {
    next(e)
  }
}