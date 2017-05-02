import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store/'
import GetUsers from '../GetUsers/index.jsx'
import Users from '../Users/index.jsx'

export default function App () {
  return (
    <Provider store={store}>
      <div>
        <GetUsers />
        <Users />
      </div>
    </Provider>
  )
}
