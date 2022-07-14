/**
 * author: akash trivedi
 * date-created: 14-07-2022 21:01:33
 * functionality: 
 * caller-function: 
 * performs-network-request: 
 */
import React from 'react'

const DirectMessageList = () => {
  // TODO: add overflow for list
  const users = [
    'akash',
    'akash',
  ]
  return (
    <div className="direct-message-list list block-display">
      {
        users.map((user) => (
          <div className="dm-user">{user}</div>
        ))
      }
    </div>
  )
}

export default DirectMessageList