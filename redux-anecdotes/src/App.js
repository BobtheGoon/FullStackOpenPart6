import AnecdoteForm from './components/AnecdoteForm'
import AnectodeList from './components/AnecdoteList'
import Filter from './components/Filter'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteForm />
      <AnectodeList />
    </div>
  )
}

export default App