import { Fragment } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from 'view/home'
import Village from 'view/village'
import Watcher from 'view/watcher'

import 'static/styles/index.css'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/village" element={<Village />} />
        <Route path="*" element={<Navigate to="/home" replace={true} />} />
      </Routes>
      <Watcher />
    </Fragment>
  )
}

export default App
