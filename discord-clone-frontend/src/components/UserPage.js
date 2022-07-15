/**
 * author: akash trivedi
 * date-created: 2022-07-03 21:43:53
 * functionality: 
 * caller-function: 
 * performs-network-request: 
 */

import React from 'react'
import {
  Divider, Avatar, Fab
} from '@mui/material'
import {
  HomeOutlined, Add, Navigation
} from '@mui/icons-material'
import { Outlet } from 'react-router-dom'
import AppContext from '../context/AppContext'

const image = 'https://crncompanylimited.com/wp-content/uploads/2019/10/empty-profile-picture.png'
const channels = [{ imgurl: image }, { imgurl: image }, { imgurl: image }]

const UserPage = () => {
  const { appState, dispatch } = React.useContext(AppContext)
  return (
    <div className='flex-display userpage-container'>
      <div className='server-container'>
        <HomeOutlined sx={{ height: 48, width: 48 }} className='srvr-icon' />
        {
          appState.serverList.map(
            (object, id) => (
              <Avatar sx={{ height: 48, width: 48 }} key={id} src={object.imgurl} alt='channel icon' className='srvr-icon' />
            ))
        }
        <div className='srvr-options'>
          <Divider sx={{ color: 'white' }} color='white' />
          <Fab sx={{ backgroundColor: '#F7CD2E', height: 48, width: 48, display: 'block', marginTop: 1 }}>
            <Add />
          </Fab>
          <Fab sx={{ backgroundColor: '#F7CD2E', height: 48, width: 48, display: 'block', marginTop: 1 }}>
            <Navigation />
          </Fab>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default UserPage