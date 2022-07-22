/**
 * author: akash trivedi
 * date-created: 15-07-2022 00:35:34
 * functionality: single message in the chat
 * caller-function: discord-clone-frontend\src\components\UserChat.js
 * performs-network-request: false
 */

import React from 'react'

const SingleMessage = (props) => {
  const icon = 'https://crncompanylimited.com/wp-content/uploads/2019/10/empty-profile-picture.png'
  return (
    <div className="flex-display message">
      <img src={icon} alt="profile-icon" className='message-profile-icon' />
      <div className="message-details block-display">
        <div className="message-sender">
          {props.info.sender} <span className='message-time-stamp'>{props.info.timeStamp}</span>
        </div>
        <div className="message-message">
          {props.info.message}
        </div>
      </div>
    </div>
  )
}

export default SingleMessage