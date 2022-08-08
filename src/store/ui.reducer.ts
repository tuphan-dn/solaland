import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

/**
 * Interface & Utility
 */

export type Infix = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type Theme = 'light' | 'dark'

export type UIState = {
  theme: Theme
  width: number
  infix: Infix
  touchable: boolean
}

const getInfix = (): Infix => {
  const width = window.innerWidth
  if (width < 640) return 'sm'
  if (width < 768) return 'md'
  if (width < 1024) return 'lg'
  if (width < 1280) return 'xl'
  return '2xl'
}
const isTouchable = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0
}
const getTheme = (): Theme => {
  if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
  return 'dark'
}

/**
 * Store constructor
 */

const NAME = 'ui'
const initialState: UIState = {
  theme: getTheme(),
  width: window.innerWidth,
  infix: getInfix(),
  touchable: isTouchable(),
}

/**
 * Actions
 */

export const setTheme = createAsyncThunk(
  `${NAME}/setTheme`,
  async (theme: Theme) => {
    return { theme }
  },
)

export const resize = createAsyncThunk(`${NAME}/resize`, async () => {
  const width = window.innerWidth
  const infix = getInfix()
  return { width, infix }
})

/**
 * Usual procedure
 */

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder
      .addCase(
        setTheme.fulfilled,
        (state, { payload }) => void Object.assign(state, payload),
      )
      .addCase(
        resize.fulfilled,
        (state, { payload }) => void Object.assign(state, payload),
      ),
})

export default slice.reducer
