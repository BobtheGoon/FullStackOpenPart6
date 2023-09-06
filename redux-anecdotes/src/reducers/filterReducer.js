import { createSlice } from "@reduxjs/toolkit"

const initialState = ''

const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    filterUpdate(state, action) {
      console.log(state)
      return action.payload
    },
  }
})

export const {filterUpdate} = filterSlice.actions
export default filterSlice.reducer