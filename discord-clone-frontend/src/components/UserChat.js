/**
 * author: akash trivedi
 * date-created: 14-07-2022 23:39:14
 * functionality: 
 * caller-function: 
 * performs-network-request: true
 */

import React from 'react'
import {
  Call, HelpOutline
} from '@mui/icons-material'
import SingleMessage from './SingleMessage'
import AppContext from '../context/AppContext'


const UserChat = ({ userId }) => {
  const { chats } = React.useContext(AppContext).appState
  const user = chats.userId
  return (
    <div className="grow user-chat">
      <header className='flex-display bdr-btm chat-header'>
        <div className='user-name grow'>@ {userId}</div>
        <div className='icon'><Call /></div>
        <div>
          <form method='get'>
            <input type='text' className='input' placeholder='search' />
          </form>
        </div>
        <div className='icon'><HelpOutline /></div>
        <div className='icon'></div>
      </header>
      <div className='chat'>
        <div className='chat-heading block-display'>
          <div>
            <img className='user-chat-profile-photo' src='https://uxwing.com/wp-content/themes/uxwing/download/44-hand-gestures/good.png' alt='profile photo' />
          </div>
          <div className='user-chat-name-heading'>{userId}</div>
          <div className='user-chat-description-heading'>
            This is the beginning of your direct message history with {userId}
          </div>
          <hr />
        </div>
        <div className='actual-chat'>
          {
            Object.entries(user).map(([key, value]) => (
              <SingleMessage info={value.message} key={key} />
            ))
          }
        </div>
      </div>
      <div className='user-input flex-display'>
        <form method='post'>
          <input type='text' className='input grow flex-display' placeholder={`message @ ${userId}`} />
        </form>
      </div>
    </div >
  )
}

export default UserChat

function getChatList() {
  let list = new Array(50)
  const messageObject = {
    id: 1,
    imageUrl: 'https://uxwing.com/wp-content/themes/uxwing/download/44-hand-gestures/good.png',
    sender: 'mr. robot',
    timeStamp: '15-07-2022',
    message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur delectus, cupiditate neque aut qui eum omnis vel magnam sit minima perferendis quas architecto? Ratione voluptatibus commodi, repudiandae quos odit iste?'
  }
  for (let i = 0; i < 20; i++) {
    list.push({ ...messageObject, id: i })
  }
  return list
}
const chatList = getChatList()