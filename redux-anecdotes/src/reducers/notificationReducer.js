import { createSlice } from "@reduxjs/toolkit";

const initialState = 'Initial value'

const notificationSlice = createSlice({
  name:'notification',
  initialState,

  reducers: {
    updateNotification (state, action) {
      console.log('hi')
    }
  }
})

export const {updateNotification} = notificationSlice.actions
export default notificationSlice.reducer