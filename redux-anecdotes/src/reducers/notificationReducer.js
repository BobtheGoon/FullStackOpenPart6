import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const notificationSlice = createSlice({
  name:'notification',
  initialState,

  reducers: {
    newNotification (state, action) {
      return state = action.payload
    },

    clearNotification (state, action) {
      state = null
      return state
    }
  }
})

export const {newNotification, clearNotification} = notificationSlice.actions

export const setNotification = (anecdote, time) => {
  return async dispatch => {
    dispatch(newNotification(anecdote))
    setTimeout(() => dispatch(clearNotification()), time*1000)
  }
}

export default notificationSlice.reducer