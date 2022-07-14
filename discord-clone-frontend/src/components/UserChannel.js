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
          <Divider />
        </div>

        <div>
          <button variant='contained'>
            Direct Messages +
          </button>
        </div>
      </div >
    </div>
  )
}

export default UserChannel