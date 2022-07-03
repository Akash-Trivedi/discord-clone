/**
 * author: akash trivedi
 * date-created: 2022-07-03 21:00:04
 * functionality: 
 * caller-function: 
 * performs-network-request: true
 */

import React from 'react'
import {
  Grid, Button, TextField, inputAdornmentClasses
} from '@mui/material'


const Login = () => {

  const INPUT_NAMES = {
    EMAIL: 'email',
    PASSWORD: 'pswd'
  }

  let formData = new FormData()
  formData.set(INPUT_NAMES.EMAIL, '')
  formData.set(INPUT_NAMES.PASSWORD, '')

  const [formState, updateFormData] = React.useState(formData)

  function handleChange(event) {
    switch (event.target.name) {
      case INPUT_NAMES.EMAIL:
        // TODO: apply regex
        updateFormData(data => (data.set(event.target.name, event.target.value)))
        break;

      case INPUT_NAMES.PASSWORD:
        // TODO: apply regex
        updateFormData(data => (data.set(event.target.name, event.target.value)))
        break;

      default:
        break;
    }
  }



  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField variant='outlined' label='email' onChange={handleChange} value={formState.get(INPUT_NAMES.EMAIL)} name={INPUT_NAMES.EMAIL} />
      </Grid>
      <Grid item xs={12}>
        <TextField variant='outlined' label='password' onChange={handleChange} value={formState.get(INPUT_NAMES.PASSWORD)} name={INPUT_NAMES.PASSWORD} />
      </Grid>
      <Button color='primary' variant='contained'>Signin</Button>
    </Grid>
  )
}

export default Login