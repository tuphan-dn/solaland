import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from 'view/app'
import ApplicationProvider from 'providers/application.provider'

import store from 'store'
import reportWebVitals from 'reportWebVitals'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ApplicationProvider>
          <App />
        </ApplicationProvider>
      </HashRouter>
    </Provider>
  </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
