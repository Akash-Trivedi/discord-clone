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
  Headphones, HeadphonesRounded, Mic,
  MicOff, Settings
} from '@mui/icons-material'

const UserPanel = () => {
  const [userState, setUserState] = React.useState({
    speakerIsOn: true,
    micIsOn: false
  })
  const username = 'Mr. Robot'
  function updateMicState(event) {
    setUserState(
      old => ({ ...old, micIsOn: !old.micIsOn })
    )
  }
  return (
    <div className='flex-display channel-panel'>
      <div><Avatar /></div>
      <div className='block-display grow'>
        <div>{username}</div>
        <div>#3433</div>
      </div>
      {
        userState.micIsOn ? (
          <div>
            <button className='icon' onClick={updateMicState}>
              <Tooltip title='mute' placement='top'><Mic className='icon' /></Tooltip>
            </button>
          </div>
        ) : (
          <div>
            <button className='icon' onClick={updateMicState}>
              <Tooltip title='unmute' placement='top'><MicOff className='icon' /></Tooltip>
            </button>
          </div>
        )
      }

      <div>
        <button className='icon'>
          <Tooltip title='deafen' placement='top'>
            <HeadphonesRounded />
          </Tooltip>
        </button>
      </div>

      <div>
        <button className='icon'>
          <Tooltip title='user setting' placement='top'>
            <Settings />
          </Tooltip>
        </button>
      </div>
    </div >
  )
}

export default UserPanel