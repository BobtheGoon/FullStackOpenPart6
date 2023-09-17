import { createSlice } from "@reduxjs/toolkit";

const initialState = 'Initial value'

const notificationSlice = createSlice({
  name:'notification',
  initialState,

  reducers: {
    voteNotification (state, action) {
      console.log(state)
      console.log(action)
      console.log(action.payload.content)

      return state = `You voted for "${action.payload.content}"`
    },

    newAnecdoteNotification (state, action) {
      console.log(state)
      console.log(action)

      return state = `Added new anecdote "${action.payload}"`
    },

    clearNotification (state, action) {
      state = ''
      return state
    }
  }
})

export const {voteNotification, newAnecdoteNotification, clearNotification} = notificationSlice.actions
export default notificationSlice.reducer