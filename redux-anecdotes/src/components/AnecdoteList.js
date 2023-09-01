import { useSelector, useDispatch } from "react-redux"

import { voteAnecdote } from "../reducers/anecdoteReducer"

const AnectodeList = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

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