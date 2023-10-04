import { useMutation, useQueryClient } from '@tanstack/react-query'
import NotificationContext from '../NotificationContext'
import { useContext } from 'react'

import { addAnecdotes } from "../request"

const AnecdoteForm = () => {
  const [notification, dispatch] = useContext(NotificationContext)

  const queryClient = useQueryClient()

  const newAnecdoteMutation = useMutation(addAnecdotes, {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['anecdotes']})
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    if (content.length < 5) {
      dispatch({type:'SET', payload:`Too shord anecdote, must have length 5 or more`})
      setTimeout(() => dispatch({type:'CLEAR'}), 5000)
      return
    }

    newAnecdoteMutation.mutate({content})
    
    dispatch({type:'SET', payload:`Added anecdote ${content}`})
    setTimeout(() => dispatch({type:'CLEAR'}), 5000)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
