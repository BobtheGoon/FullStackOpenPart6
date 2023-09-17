import { useDispatch } from "react-redux";

import { createAnecdote } from "../reducers/anecdoteReducer";
import { newAnecdoteNotification, clearNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    dispatch(newAnecdoteNotification(anecdote))
    dispatch(createAnecdote(anecdote))
    dispatch(clearNotification())
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