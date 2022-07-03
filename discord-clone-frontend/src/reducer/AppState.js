/**
 * author: akash trivedi
 * date-created: 2022-07-03 20:49:03
 * functionality: return children wrapped in app context
 * caller-function: discord-clone-frontend\src\App.js
 * performs-network-request: true
 */

import React from 'react'
import AppContext from '../context/AppContext'

const AppState = (props) => {

  const [appState, dispatch] = React.useReducer(workReducer, null)

  return (
    <AppContext.Provider
      value={{ appState, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppState
