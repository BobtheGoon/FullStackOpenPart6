import { useDispatch } from "react-redux";

import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const addAnecdote = (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    dispatch(createAnecdote(anecdote))
  }

  return (
    <form onSubmit={addAnecdote}>
      <div><input name="anecdote" /></div>
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm