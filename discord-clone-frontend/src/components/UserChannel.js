/**
 * author: akash trivedi
 * date-created: 2022-07-05 14:10:00
 * functionality: 
 * caller-function: 
 * performs-network-request: true
 */

import React from 'react'
import {
  Divider
} from '@mui/material'
import UserPanel from './UserPanel'
import UserChat from './UserChat'
import ChatPanel from './ChatPanel'
import AppContext from '../context/AppContext'


const UserChannel = () => {
  const { friendList } = React.useContext(AppContext).appState
  const [channelState, setChannelState] = React.useState({
    activeFriendId: null
  })
  return (
    <div className='flex-display channel-container'>
      <div className='channel-list'>
        <input placeholder='find or start a conversation' className='input' />
        <div><Divider className='divider' /></div>
        <div><button className='btn btn-wide'>friends</button></div>
        <div><Divider className='divider' /></div>
        <div><button className='btn btn-wide'>Direct Messages +</button></div>
        <div className='direct-message-list'>
          {
            Object.entries(friendList).map(([key, value]) => {
              return (
                <div className='dm-user' key={key} onClick={setChannelState({ activeFriendId: key })}>
                  {value.fullname}
                </div>
              )
            })
          }
        </div>
        <UserPanel />
      </div>
      {
        channelState.activeFriendId === null ?
          (<ChatPanel userId={channelState.activeFriendId} />) :
          (<UserChat userId={channelState.activeFriendId} />)
      }
    </div>
  )
}

export default UserChannel