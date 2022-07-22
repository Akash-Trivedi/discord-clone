/**
 * author: akash trivedi
 * date-created: 2022-07-04 00:19:46
 * functionality: 
 * caller-function: 
 * performs-network-request: 
 */

import React from 'react'
import {
  Box, AppBar, Toolbar, IconButton, Typography, Button
} from '@mui/material'
import { NavLink } from 'react-router-dom'


const Homepage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to='/homepage' style={{ paddingInline: 10, color: 'white', textDecoration: 'none' }}>
              Discord Clone
            </NavLink>
          </Typography>
          <span>
            <NavLink to='/register' style={{ paddingInline: 10, color: 'white', textDecoration: 'none' }}>register</NavLink>
          </span>
          <span style={{ color: 'white' }}>
            <NavLink to='/login' style={{ paddingInline: 10, color: 'white', textDecoration: 'none' }}>login</NavLink>
          </span>
        </Toolbar>
      </AppBar>
    </Box >
  )
}

export default Homepage