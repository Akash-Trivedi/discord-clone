/**
 * author: akash trivedi
 * date-created: 14-07-2022 21:04:22
 * functionality: display ui for user control options
 * caller-function: 
 * performs-network-request: 
 */

import React from 'react'
import {
  Avatar, Tooltip
} from '@mui/material'

import {
  Headphones, Mic,
  MicOff, Settings
} from '@mui/icons-material'

const UserPanel = () => {
  let micOn = false
  const username = 'Mr. Robot'
  return (
    <div className='flex-display channel-panel'>
      <div><Avatar /></div>
      <div className='block-display'>
        <div>{username}</div>
        <div>#3433</div>
      </div>
      {
        micOn === true ? (
          <div>
            <button>
              <Tooltip title='mute' placement='top'><Mic className='icon' /></Tooltip>
            </button>
          </div>
        ) : (
          <div>
            <button>
              <Tooltip title='top' placement='top'><MicOff className='icon' /></Tooltip>
            </button>
          </div>
        )
      }

      <div className='icon'>
        <button>
          <Tooltip title='deafen' placement='top'>
            <Headphones sx={{ color: '#CAD5E2' }} />
          </Tooltip>
        </button>
      </div>

      <div className='icon'>
        <button>
          <Tooltip title='user setting' placement='top'>
            <Settings sx={{ color: '#CAD5E2' }} />
          </Tooltip>
        </button>
      </div>
    </div>
  )
}

export default UserPanel