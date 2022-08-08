import { configureStore } from '@reduxjs/toolkit'

import main from 'store/main.reducer'
import ui from 'store/ui.reducer'

const store = configureStore({
  reducer: {
    main,
    ui,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
