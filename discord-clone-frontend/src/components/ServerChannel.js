/**
 * author: akash trivedi
 * date-created: 15-07-2022 16:02:26
 * functionality: display server groups and chats
 * caller-function: discord-clone-frontend\src\App.js
 * performs-network-request: true
 */

import React from 'react'
import UserChat from './UserChat'
import UserPanel from './UserPanel'

const ServerChannel = () => {
  return (
    <div className='display-block chat-panel'>
      {/* <ChatPanel /> */}
      <UserPanel />
      <UserChat />
    </div>
  )
}

export default ServerChannel