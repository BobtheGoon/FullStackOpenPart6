import { useSelector, useDispatch } from "react-redux"

import { voteAnecdote } from "../reducers/anecdoteReducer"

const AnectodeList = () => {
  const dispatch = useDispatch()
  
  const anecdotes = useSelector(({anecdotes, filter}) => {
    if (filter === null) { return anecdotes }
    return anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase())) //filter through anecdotes and check if content contains filter value
  })

  const vote = (id) => {
    dispatch(voteAnecdote(id))
  }
  
  const sortByVotes = (a ,b) => {
    return Number(a.votes) > Number(b.votes) ? -1 : 1
  }

  return (
    <div>
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
    </div>
  )
}

export default AnectodeList