import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { offline } from 'redux-offline'
// import offlineConfig from 'redux-offline/lib/defaults'
import { PersistGate } from 'redux-persist/es/integration/react'

import { persistor, store } from './store'

import './index.css'

import Routes from './client/routes/web'

import registerServiceWorker from './registerServiceWorker'

const Loading = () => <div>Booting...</div>

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<Loading />}
      persistor={persistor}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
