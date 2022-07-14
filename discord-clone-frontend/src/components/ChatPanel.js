/**
 * author: akash trivedi
 * date-created: 14-07-2022 20:59:53
 * functionality: display user/channel chat
 * caller-function: *
 * performs-network-request: true
 */

import React from 'react'
import {
  EmojiPeople
} from '@mui/icons-material'

const ChatPanel = () => {
  let btnActive = true
  return (
    <div className='chat-panel'>
      <header className='chat-panel-header'>
        <div className='icon'><EmojiPeople /></div>
        <div className='icon'>friends</div>
        <div><button className='chat-panel-header-btn'>online</button></div>
        <div><button className='chat-panel-header-btn inactive-icon'>all</button></div>
        <div><button className='chat-panel-header-btn inactive-icon'>pending</button></div>
        <div><button className='chat-panel-header-btn inactive-icon'>blocked</button></div>
      </header>
      <div>
        this is mugordo
      </div>
    </div >
  )
}

export default ChatPanel