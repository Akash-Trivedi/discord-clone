/**
 * author: akash trivedi
 * date-created: 2022-07-03 21:00:04
 * functionality: 
 * caller-function: 
 * performs-network-request: true
 */

import React from 'react'
import {
  Grid, Button, TextField, Box, FormControlLabel, Checkbox
} from '@mui/material'
import {
  NavLink, Link, Navigate
} from 'react-router-dom'
import Login from './Login'

const Register = () => {
  const [formState, updateFormState] = React.useState(
    {
      email: '',
      username: '',
      password: ''
    }
  )

  function updateFormFields(event) {
    switch (event.target.name) {
      case 'email':
        // TODO: apply regex
        updateFormState(data => ({ ...data, [event.target.name]: event.target.value }))
        break

      case 'username':
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

  function registerUser(event) {

  }

  return (
    <Box sx={{ p: 4, display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={registerUser} className='w-1/2'>
        <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
          {/* row 1 */}
          <Grid item xs={7}>
            <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
              <h1 className='text-2xl font-semibold'>Create an account</h1>
            </Box>
          </Grid>

          {/* row 2 */}
          <Grid item xs={7}>
            <TextField label='email' onChange={updateFormFields} type='text' value={formState.email} name='email' id='email' fullWidth required />
          </Grid>

          {/* row 3 */}
          <Grid item xs={7}>
            <TextField label='username' onChange={updateFormFields} type='text' value={formState.username} name='username' fullWidth id='username' required />
          </Grid>

          {/* row 4 */}
          <Grid item xs={7}>
            <TextField label='password' onChange={updateFormFields} type='password' value={formState.password} name='password' fullWidth id='password' required />
          </Grid>

          {/* row 5 */}
          <Grid item xs={7}>
            <FormControlLabel id='showPassword' control={<Checkbox />} onChange={showContent} label='show password' />
          </Grid>


          {/* row 7 */}
          <Grid item xs={7}>
            <Box display='flex' justifyContent='center'>
              <Button variant='contained' type='submit'>Verfiy via email</Button>
            </Box>
          </Grid>

          {/* row 8 */}
          <Grid item xs={7}>
            <Box sx={{ py: 2, display: 'flex', justifyContent: 'center' }}>
              <NavLink to='/login'>
                <span> Already have an account?</span></NavLink>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box >
  )
}

export default Register

function verifyOtp() {
  return
}