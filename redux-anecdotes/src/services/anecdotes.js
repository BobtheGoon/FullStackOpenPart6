import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = axios.get(baseUrl)
  return (await response).data
}

export default {getAll}