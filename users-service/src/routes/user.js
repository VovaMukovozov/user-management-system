import { Router } from 'express'
import { newUser, queryUser } from '../service/validator/schemas'
import validator, { parseIntFields } from '../middleware/validator'
import { getUsers, createUser } from '../controller/user'

const router = Router()

router.get('/', parseIntFields, validator(queryUser, 'query'), getUsers)
router.post('/', validator(newUser, 'body'), createUser)

export default router