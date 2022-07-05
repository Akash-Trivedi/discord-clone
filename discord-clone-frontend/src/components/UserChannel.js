/**
 * author: akash trivedi
 * date-created: 2022-07-05 14:10:00
 * functionality: 
 * caller-function: 
 * performs-network-request: true
 */


import React from 'react'
import {
  NavLink
} from 'react-router-dom'
import {
  Button, Divider, Grid, Avatar, Tooltip,
  Box, Typography, Toolbar, AppBar, IconButton
} from '@mui/material'
import {
  Headphones,
  Mic,
  MicOff,
  Settings
} from '@mui/icons-material'

const UserChannel = () => {
  let micOn = false
  const username = 'Mr. Robot'
  return (
    <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'centre' }}>
      {/* first column */}
      <Grid container xs={3} sx={{ p: 0, backgroundColor: '#363c45', position: 'relative', height: '100vh' }}>
        <Grid item xs={12} sx={{ p: 1.5 }}>
          <input
            style={{
              color: '#CAD5E2',
              backgroundColor: '#242B2E',
              border: 0,
              paddingRight: 20,
              paddingLeft: 20,
              paddingTop: 10,
              paddingBottom: 10,
            }}
            placeholder='find or start a conversation' />
        </Grid>

        <Grid item xs={12} sx={{}}><Divider sx={{ backgroundColor: '#535961' }} /></Grid>

        <Grid item xs={12} sx={{ p: 1 }}>
          <Button variant='contained' sx={{ backgroundColor: '#535961', px: 10 }}>friends</Button>
        </Grid>

        <Grid item xs={12} sx={{}}><Divider sx={{ backgroundColor: '#535961' }} /></Grid>

        <Grid item xs={12} sx={{ p: 1 }}>
          <Button variant='contained' sx={{ backgroundColor: '#535961', px: 4.5 }}>Direct Messages +</Button>
        </Grid>
        <Grid container xs={12} sx={{ p: 0 }}>
          <Grid item xs={2}><Avatar /></Grid>
          <Grid item xs={4} sx={{}}>
            <Grid item sx={{ color: '#ffffff' }}>{username}</Grid>
            <Grid item sx={{ color: '#758283' }}>#3433</Grid>
          </Grid>
          {
            micOn === true ? (
              <Grid item xs={2}>
                <Button>
                  <Tooltip title='mute' placement='top'>
                    <Mic sx={{ color: '#CAD5E2' }} />
                  </Tooltip>
                </Button>
              </Grid>
            ) : (
              <Grid item xs={2}>
                <Button>
                  <Tooltip title='top' placement='top'>
                    <MicOff sx={{ color: '#CAD5E2' }} />
                  </Tooltip>
                </Button>
              </Grid>
            )
          }
          <Grid item xs={2}>
            <Button>
              <Tooltip title='deafen' placement='top'>
                <Headphones sx={{ color: '#CAD5E2' }} />
              </Tooltip>
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button>
              <Tooltip title='user setting' placement='top'>
                <Settings sx={{ color: '#CAD5E2' }} />
              </Tooltip>
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* second column */}
      <Grid container xs={9} sx={{ p: 0, m: 0 }}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              friends |
              <Button variant='container' sx={{ px: 1, py: 0, color: '#ffffff', backgroundColor: '#242B2E' }}>Online</Button>
              <Button variant='container' sx={{ px: 1, py: 0, color: '#ffffff', backgroundColor: '#242B2E' }}>Online</Button>
              <Button variant='container' sx={{ px: 1, py: 0, color: '#ffffff', backgroundColor: '#242B2E' }}>Online</Button>
              <Button variant='container' sx={{ px: 1, py: 0, color: '#ffffff', backgroundColor: '#242B2E' }}>Online</Button>
              <span>
                <NavLink to='/register' style={{ paddingInline: 10, color: 'white', textDecoration: 'none' }}>register</NavLink>
              </span>
              <span style={{ color: 'white' }}>
                <NavLink to='/login' style={{ paddingInline: 10, color: 'white', textDecoration: 'none' }}>login</NavLink>
              </span>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          this is mugordo
        </Grid>
      </Grid>
    </Grid >
  )
}

export default UserChannel