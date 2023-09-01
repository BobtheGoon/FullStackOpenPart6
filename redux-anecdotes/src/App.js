import { useSelector, useDispatch } from 'react-redux'

import { createAnecdote, voteAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }

  const anecdoteForm = (e) => {
    e.preventDefault()
    const anecdote = e.target.anecdote.value
    dispatch(createAnecdote(anecdote))
  }
  
  const sortByVotes = (a ,b) => {
    console.log(a, b)
    return Number(a.votes) > Number(b.votes) ? -1 : 1
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>

      {anecdotes.sort(sortByVotes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}

      <h2>create new</h2>
      <form onSubmit={anecdoteForm}>
        <div><input name="anecdote" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App