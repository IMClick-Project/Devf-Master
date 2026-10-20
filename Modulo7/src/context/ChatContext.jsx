
import { useReducer } from 'react'
import { ChatContext } from './ChatContext'
import {
  chatReducer,
  initialState,
} from '../reducers/chatReducer'

export function ChatProvider({ children }) {
  const [state, dispatch] = useReducer(
    chatReducer,
    initialState
  )

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  )
}
