import React from 'react'
import { AppNavigaotor } from './navigation/AppNavigator'
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}/>
      <AppNavigaotor/>
    </Provider>
  )
}
