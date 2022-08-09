import { configureStore } from '@reduxjs/toolkit'

import ui from 'store/ui.reducer'

const store = configureStore({
  reducer: {
    ui,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
