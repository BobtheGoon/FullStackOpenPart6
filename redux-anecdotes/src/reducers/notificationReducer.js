import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const notificationSlice = createSlice({
  name:'notification',
  initialState,

  reducers: {
    voteNotification (state, action) {
      return state = `You voted for "${action.payload.content}"`
    },

    newAnecdoteNotification (state, action) {
      return state = `Added new anecdote "${action.payload}"`
    },

    clearNotification (state, action) {
      state = null
      return state
    }
  }
})

export const {voteNotification, newAnecdoteNotification, clearNotification} = notificationSlice.actions
export default notificationSlice.reducer