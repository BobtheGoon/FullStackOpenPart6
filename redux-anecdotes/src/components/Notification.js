import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { clearNotification } from "../reducers/notificationReducer"


const Notification = () => {
  const dispatch = useDispatch()
  
  const notification = useSelector(({notification}) => {
    return notification
  })
  
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    // display: 'none'
  }
  
  if (notification === null) return null

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification