import { useSelector, useDispatch } from "react-redux"

import { voteAnecdote } from "../reducers/anecdoteReducer"
import { voteNotification, clearNotification } from "../reducers/notificationReducer"

const AnectodeList = () => {
  const dispatch = useDispatch()
  
  const anecdotes = useSelector(({anecdotes, filter}) => {
    if (filter === '') { return anecdotes }
    return anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase())) //filter through anecdotes and check if content contains filter value
  })

  const vote = (anecdote) => {
    dispatch(voteNotification(anecdote))
    dispatch(voteAnecdote(anecdote.id))
    dispatch(clearNotification())
  }
  
  const sortByVotes = (a ,b) => {
    return Number(a.votes) > Number(b.votes) ? -1 : 1
  }

  return (
    <div>
      {/*We have to use a spread operator for anecdotes so as to not mutate the state of redux*/}
      {[...anecdotes].sort(sortByVotes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnectodeList