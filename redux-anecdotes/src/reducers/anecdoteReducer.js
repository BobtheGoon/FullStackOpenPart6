import { createSlice } from "@reduxjs/toolkit"

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
    
    createAnecdote (state, action) {
      state.push(action.payload)
    },

    setAnecdotes (state, action) {
      return action.payload
    }

  }
})

export const {voteAnecdote, createAnecdote, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer