import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { clearNotification } from "../reducers/notificationReducer"


const Notification = () => {
  const dispatch = useDispatch()
  
  const notification = useSelector(({notification}) => {
    return notification
  })
  
  const hideNotification = () => {
    dispatch(clearNotification())
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification