import { createSlice } from '@reduxjs/toolkit'
import { gifList } from './gifList'

const initialState = {
  value: 0,
  gif: gifList[0],
  message: "CLICK ME!!!"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    next: (state) => {
      state.value = state.value < gifList.length - 1 ? state.value + 1 : 1
      state.gif = gifList[state.value]
      state.message = ""
    },
  },
})

export const { next } = counterSlice.actions

export default counterSlice.reducer