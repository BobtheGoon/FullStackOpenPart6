import { useDispatch } from "react-redux";

import { createAnecdote } from "../reducers/anecdoteReducer";
import { newAnecdoteNotification, clearNotification } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes"

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (e) => {
    e.preventDefault()

    const newAnecdote = await anecdoteService.createNew(e.target.anecdote.value)
    
    dispatch(createAnecdote(newAnecdote))
    dispatch(newAnecdoteNotification(newAnecdote.content))
    setTimeout(() => dispatch(clearNotification()), 5000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm