/**
 * author: akash trivedi
 * date-created: 15-07-2022 00:35:34
 * functionality: single message in the chat
 * caller-function: discord-clone-frontend\src\components\UserChat.js
 * performs-network-request: false
 */

import React from 'react'

const SingleMessage = ({ info }) => {
  return (
    <div className="flex-display message">
      <img src={info.imageUrl} alt="profile-icon" className='message-profile-icon' />
      <div className="message-details block-display">
        <div className="message-sender">
          {info.sender} <span className='message-time-stamp'>{info.timeStamp}</span>
        </div>
        <div className="message-message">
          {info.message}
        </div>
      </div>
    </div>
  )
}

export default SingleMessage