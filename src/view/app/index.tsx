import { Navigate, Route, Routes } from 'react-router-dom'

import Home from 'view/home'
import Village from 'view/village'

import 'static/styles/index.css'
import Watcher from 'view/watcher'

const App = () => {
  return (
    <div className="w-screen h-screen bg-slate-50 dark:bg-slate-900">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/village" element={<Village />} />
        <Route path="*" element={<Navigate to="/home" replace={true} />} />
      </Routes>
      <Watcher />
    </div>
  )
}

export default App
