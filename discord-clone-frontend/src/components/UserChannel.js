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
import DirectMessageList from './DirectMessageList'


const UserChannel = () => {

  return (
    <div className="block-display channel-panel">
      <div className='channel-list'>
        {/* first column */}
        <div className="block-display channel-list">
          <input placeholder='find or start a conversation' className='input' />
        </div>
        <div className="block-display">
          <Divider className='divider' />
        </div>
        <div>
          <button className='btn btn-wide'>friends</button>
        </div>

        <div>
          <Divider className='divider' />
        </div>

        <div>
          <button className='btn btn-wide'>Direct Messages +</button>
        </div>
        <DirectMessageList />
      </div >
    </div>
  )
}

export default UserChannel