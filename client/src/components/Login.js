/**
 * author: akash trivedi
 * date-created: 2022-07-03 21:00:04
 * functionality: 
 * caller-function: 
 * performs-network-request: true
 */

import React from 'react'
import {
  Grid, Box, TextField, Button, FormControlLabel, Checkbox
} from '@mui/material'
import {
  NavLink
} from 'react-router-dom'
const Login = () => {

  const [formState, updateFormState] = React.useState({ email: '', password: '' })

  function updateFormFields(event) {
    switch (event.target.name) {
      case 'email':
        // TODO: apply regex
        updateFormState(data => ({ ...data, [event.target.name]: event.target.value }))
        break

      case 'password':
        // TODO: apply regex
        updateFormState(data => ({ ...data, [event.target.name]: event.target.value }))
        break

      default:
        break
    }
  }
  function showContent(event) {
    let inputPassword = document.getElementById('password');
    inputPassword.type.localeCompare('password') === 0 ? inputPassword.type = 'text' : inputPassword.type = 'password'
  }

  function loginUser(event) {
    event.preventDefault()
  }

  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }} className='w-1/4'>
      <form onSubmit={loginUser} className='w-1/3' method='post'>
        <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>

          <Grid item xs={7}>
            <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
              <h1 className='capitalize text-2xl font-semibold'>User login</h1>
            </Box>
          </Grid>

          <Grid item xs={7}>
            <TextField label='email' onChange={updateFormFields} type='text' value={formState.email} name='email' fullWidth autoComplete='off' />
          </Grid>

          <Grid item xs={7}>
            <TextField label='password' onChange={updateFormFields} type='password' value={formState.password} name='password' fullWidth id='password' autoComplete='false' />
          </Grid>

          <Grid item xs={7}>
            <FormControlLabel id='showPassword' control={<Checkbox />} onChange={showContent} label='show password' />
          </Grid>

          <Grid item xs={7}>
            <Box display='flex' justifyContent='center'>
              <Button variant='contained' type='submit'>Login</Button>
            </Box>
          </Grid>

          <Grid item xs={7}>
            <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
              Don't have an account?<NavLink to='/register'> Signup! </NavLink>
            </Box>
          </Grid>

        </Grid >
      </form >
    </Box >
  )
}

export default Login