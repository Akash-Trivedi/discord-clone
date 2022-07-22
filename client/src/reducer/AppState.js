/**
 * author: akash trivedi
 * date-created: 2022-07-03 20:49:03
 * functionality: return children wrapped in app context
 * caller-function: discord-clone-frontend\src\App.js
 * performs-network-request: true
 */

import React from 'react'
import AppContext from '../context/AppContext'
import ACTIONS from './action.types'

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_ACTIVE_FRIEND:
      console.log(action.payload);
      return {
        ...state, activeFriendId: action.payload
      }

    default:
      break;
  }
}
const AppState = (props) => {

  const [appState, dispatch] = React.useReducer(reducer, {
    friendList: {
      'mr robot': {
        username: 'mr robot',
        fullname: 'akash trivedi',
        email: 'sunnytrivedi321@gmail.com',
        dob: '15-07-2000'
      },
      'sagar': {
        username: 'sagar',
        fullname: 'sagar a.k.a. aman',
        email: 'aman.trivedi888@gmail.com',
        dob: '15-07-1997'
      },
    },
    chats: {
      'mr robot': {
        m1: { id: 15072022182803, message: 'hey wassup main', sender: true, timeStamp: '15-07-2022' },
        m2: { id: 15072022182804, message: 'hey wassup main', sender: true, timeStamp: '15-07-2022' },
        m3: { id: 15072022182805, message: 'hey wassup main', sender: true, timeStamp: '15-07-2022' },
        m4: { id: 15072022182806, message: 'hey wassup main', sender: true, timeStamp: '15-07-2022' }
      },
      'sagar': {
        m1: { id: 15072022182803, message: 'hey wassup main', sender: true, timeStamp: '15-07-2022' },
        m2: { id: 15072022182804, message: 'hey wassup main', sender: true, timeStamp: '15-07-2022' },
        m3: { id: 15072022182805, message: 'hey wassup main', sender: true, timeStamp: '15-07-2022' },
        m4: { id: 15072022182806, message: 'hey wassup main', sender: true, timeStamp: '15-07-2022' }
      },
    },
    serverList: [
      { id: 15072022173627, name: 'community classroom', icon: 'https://crncompanylimited.com/wp-content/uploads/2019/10/empty-profile-picture.png' },
      { id: 15072022173627, name: 'love babbar', icon: 'https://crncompanylimited.com/wp-content/uploads/2019/10/empty-profile-picture.png' }
    ],
    activeFriendId: null
  })

  return (
    <AppContext.Provider
      value={{ appState, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppState
