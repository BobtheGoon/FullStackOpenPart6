import { createSlice } from "@reduxjs/toolkit"

import anecdoteService from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: 'notes',
  initialState: [],

  reducers: {
    voteAnecdote (state, action) {
      //Get anecdotes from IMMER state
      const anecdotes = JSON.parse(JSON.stringify(state))
      //Find correct anecdote to vote
      const anecdoteToVote = anecdotes.find(anecdote => anecdote.id === action.payload)
      anecdoteToVote.votes += 1

      return state.map(anecdote => anecdote.id !== anecdoteToVote.id ? anecdote : anecdoteToVote)
    },
    
    appendAnecdote (state, action) {
      state.push(action.payload)
    },

    setAnecdotes (state, action) {
      return action.payload
    }

  }
})

export const {voteAnecdote, appendAnecdote, setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(anecdote)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer