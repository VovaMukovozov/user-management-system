import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import validator from '../validator'
import { newUser } from '../validator/schemas'
import { createUser } from '../server/user'
import '../App.css'

const formDefaultState = ['password', 'firstName', 'lastName', 'email', 'description'].reduce((acc, cur) => {
  acc[cur] = {
    error: false,
    value: '',
  }
  return acc
}, {})

const NewUser = () => {
  const [validationError, setValidationError] = useState(false)
  const [open, setOpen] = useState(false)
  const [formState, serFormState] = useState(formDefaultState)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setValidationError(false)
    serFormState(formDefaultState)
  }

  const validateForm = formData => {
    const { isValid, errors } = validator(newUser, formData)
    console.log(errors)
    console.log(formData)
    errors && errors.forEach(error => {
      const key = error.instancePath.split('/')[1]
      serFormState(prev => ({
        ...prev,
        [key]: {
          error: true,
          value: prev[key].value
        }
      }))
    })
    return isValid
  }

  const handleSubmit = async () => {
    const formData = {
      password: formState.password.value,
      firstName: formState.firstName.value,
      lastName: formState.lastName.value,
      email: formState.email.value,
      description: formState.description.value ? formState.description.value : undefined,
    }
    const isValid = validateForm(formData)
    if(isValid) {
      try {
        await createUser(formData)
        handleClose()
        window.location.reload()
      } catch (e) {
        console.error(e)
      }
    } else {
      setValidationError(true)
    }
  }

  const onInputChange = (event, type) => {
    setValidationError(false)
    serFormState(prev => ({
      ...prev,
      [type]: {
        error: false,
        value: event.target.value
      }
    }))
  }

  return (
    <div className="new-user">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create new user
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create new user, please enter all fields.
          </DialogContentText>
          <TextField
            error={formState.email.error}
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={e => onInputChange(e, 'email')}
            value={formState.email.value}
          />
          <TextField
            error={formState.firstName.error}
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            fullWidth
            onChange={e => onInputChange(e, 'firstName')}
            value={formState.firstName.value}
          />
          <TextField
            error={formState.lastName.error}
            autoFocus
            margin="dense"
            id="lastName"
            label="Lats Name"
            fullWidth
            onChange={e => onInputChange(e, 'lastName')}
            value={formState.lastName.value}
          />
          <TextField
            error={formState.password.error}
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={e => onInputChange(e, 'password')}
            value={formState.password.value}
          />
          <TextField
            error={formState.description.error}
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            fullWidth
            onChange={e => onInputChange(e, 'description')}
            value={formState.description.value}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button data-id="submit" onClick={handleSubmit} color="primary" disabled={validationError}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default NewUser