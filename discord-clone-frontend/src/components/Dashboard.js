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
import { Outlet, useParams } from 'react-router-dom'
import UserPanel from './UserPanel'
import ChatPanel from './ChatPanel'

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
    <div className="flex-display">
      <div className="block-display server-list">
        <HomeOutlined sx={{ color: 'white', height: 48, width: 48 }} />
        {
          channels.map(
            (object) => (
              <Avatar sx={{ height: 48, width: 48 }} src={object.imgurl} alt='channel icon' />
            ))
        }
        <Divider sx={{ color: 'white' }} color='white' />
        <div className="display-block">
          <Fab sx={{ backgroundColor: '#F7CD2E', height: 48, width: 48, display: 'block' }} className="display-block">
            <Add />
          </Fab>
          <Fab sx={{ backgroundColor: '#F7CD2E', height: 48, width: 48, display: 'block' }} className="display-block">
            <Navigation />
          </Fab>
        </div>
      </div>
      <div className="channels">
        <Outlet />
        <UserPanel />
      </div>
      <div className='display-block chat-panel'>
        <ChatPanel />
      </div>
      {

      }
    </div>
  )
}

export default Dashboard