
import { useRef } from 'react'
import PromptForm from './components/PromptForm'
import History from './components/History'
import { useChat } from './hooks/useChat'
import { useOllama } from './hooks/useOllama'

function App() {
  const { state, dispatch } = useChat()
  const { sendMessage, loading, error } = useOllama()
  const sending = useRef(false)

  const activeChat = state.conversations.find(
    chat => chat.id === state.activeId
  )

  const handleSend = async (prompt) => {
    if (sending.current) return false
    sending.current = true

    const chatId = activeChat?.id ?? crypto.randomUUID()
    const previousMessages = activeChat?.messages ?? []

    if (!activeChat) {
      dispatch({
        type: 'CREATE_CHAT_WITH_ID',
        payload: chatId,
      })
    }

    const userMessage = {
      role: 'user',
      content: prompt,
    }

    dispatch({
      type: 'ADD_MESSAGE',
      payload: { chatId, message: userMessage },
    })

    try {
      const answer = await sendMessage([
        ...previousMessages,
        userMessage,
      ])

      dispatch({
        type: 'ADD_MESSAGE',
        payload: {
          chatId,
          message: {
            role: 'assistant',
            content: answer,
          },
        },
      })

      return true
    } catch (err) {
      console.error('Error de Ollama:', err)
      return false
    } finally {
      sending.current = false
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white md:flex">
      <History disabled={loading} />

      <main className="flex min-w-0 flex-1 flex-col p-6">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Chat con DeepSeek R1
        </h1>

        <div className="mx-auto mb-6 w-full max-w-3xl flex-1 space-y-4">
          {(activeChat?.messages ?? []).map((message, index) => (
            <div
              key={index}
              className={`rounded-xl p-4 ${
                message.role === 'user'
                  ? 'ml-8 bg-blue-900'
                  : 'mr-8 bg-gray-800'
              }`}
            >
              <p className="mb-2 text-sm font-bold">
                {message.role === 'user'
                  ? 'Tú'
                  : 'DeepSeek'}
              </p>
              <p className="whitespace-pre-wrap break-words">
                {message.content}
              </p>
            </div>
          ))}

          {loading && (
            <p className="text-blue-400">
              DeepSeek está pensando...
            </p>
          )}

          {error && (
            <p role="alert" className="text-red-400">
              {error}
            </p>
          )}
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <PromptForm onSend={handleSend} loading={loading} />
        </div>
      </main>
    </div>
  )
}

export default App
