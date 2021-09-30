import React from 'react'
import { AppNavigaotor } from './navigation/AppNavigator'
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigaotor/>
    </Provider>
  )
}
