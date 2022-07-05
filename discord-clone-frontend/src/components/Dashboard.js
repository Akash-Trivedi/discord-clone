/**
 * author: akash trivedi
 * date-created: 2022-07-03 21:43:53
 * functionality: 
 * caller-function: 
 * performs-network-request: 
 */

import React from 'react'
import {
  Button, Grid, Box, Snackbar, Divider, Avatar, Fab
} from '@mui/material'
import {
  HomeOutlined, Add, Navigation
} from '@mui/icons-material'
import { Outlet } from 'react-router-dom'

const channels = [
  {
    imgurl: 'https://uxwing.com/wp-content/themes/uxwing/download/44-hand-gestures/good.png',
  },
  {
    imgurl: 'https://uxwing.com/wp-content/themes/uxwing/download/44-hand-gestures/good.png',
  },
  {
    imgurl: 'https://uxwing.com/wp-content/themes/uxwing/download/44-hand-gestures/good.png',
  }
]

const Dashboard = () => {
  return (
    <Box sx={{ p: 0, m: 0 }}>
      <Grid container>
        {/* sidebar */}
        <Grid item xs={1} sx={{ backgroundColor: '#202225', minHeight: '500' }}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <HomeOutlined sx={{ color: 'white', height: 48, width: 48 }} />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Divider sx={{ color: 'white' }} />
            </Grid>
            {
              channels.map(
                (object) => (
                  <Grid item xs={12} key={object.id} sx={{ mt: 2 }}>
                    <Avatar sx={{ height: 48, width: 48 }} src={object.imgurl} alt='channel icon' />
                  </Grid>)
              )
            }
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Fab sx={{ backgroundColor: '#F7CD2E', height: 48, width: 48 }}>
                <Add sx={{ color: '#38CC77' }} />
              </Fab>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Fab sx={{ backgroundColor: '#F7CD2E', height: 48, width: 48 }}>
                <Navigation sx={{ color: '#38CC77' }} />
              </Fab>
            </Grid>
          </Grid>
        </Grid>

        {/* main content */}
        <Grid item xs={10}>
          <Outlet />
        </Grid>
      </Grid>

    </Box>
  )
}

export default Dashboard