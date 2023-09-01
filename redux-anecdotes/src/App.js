import AnecdoteForm from './components/AnecdoteForm'
import AnectodeList from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnectodeList />
    </div>
  )
}

export default App