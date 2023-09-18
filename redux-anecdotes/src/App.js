import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import anecdotesService from './services/anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import AnectodeList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { setAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdotesService.getAll()
      .then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  }, [])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteForm />
      <AnectodeList />
    </div>
  )
}

export default App