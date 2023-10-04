import axios from 'axios'

const baseURL = 'http://localhost:3001/anecdotes'

export const getAnecdotes = () => axios.get(baseURL).then(res => res.data)

export const addAnecdotes = (newAnecdote) => {
  if (newAnecdote.content.length < 5) {
    return
  }
  newAnecdote.votes = 0
  
  const response = axios.post(baseURL, newAnecdote).then(res => res.data)
  return response
}

export const voteAnecdote = (anecdote) => {
  anecdote.votes += 1
  axios.put(`${baseURL}/${anecdote.id}`, anecdote).then(res => res.data)
}
