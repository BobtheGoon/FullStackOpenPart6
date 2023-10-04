import { useQuery } from '@tanstack/react-query'

import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { getAnecdotes } from './request'

const App = () => {

  const handleVote = (anecdote) => {
    console.log('vote')
  }

  const result =  useQuery({
    queryKey: ['anecdotes'],
    queryFn:getAnecdotes
  })

  console.log(JSON.parse(JSON.stringify(result)))

  if (result.isLoading) {
    return (
    <div>
      <span>anecdotes are loading</span>
    </div>
    )
  }

  if (result.isError) {
    return (
      <div>
        <span>anecdote service not available due to problems in server</span>
      </div>
    )
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App