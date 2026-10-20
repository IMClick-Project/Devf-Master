
import { useState } from 'react'
import { sendMessageToOllama } from '../api/ollama'

export function useOllama() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendMessage = async (messages) => {
    setLoading(true)
    setError(null)

    try {
      return await sendMessageToOllama(messages)
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return {
    sendMessage,
    loading,
    error,
  }
}
