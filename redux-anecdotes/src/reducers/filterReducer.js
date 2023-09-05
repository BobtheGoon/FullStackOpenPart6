const filterReducer = (state=null, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}

export const filterUpdate = (filterString) => {
  return {
    type: 'SET_FILTER',
    payload: filterString
  }
}

export default filterReducer