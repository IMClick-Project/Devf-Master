import { useChat } from '../hooks/useChat'

function History({ disabled = false }) {
  const { state, dispatch } = useChat()

  return (
    <aside className="w-full bg-gray-900 p-5 md:min-h-screen md:w-64">
      <h2 className="mb-5 text-xl font-bold text-blue-400">
        DevfSeek
      </h2>

      <button
        disabled={disabled}
        onClick={() => dispatch({ type: 'CREATE_CHAT' })}
        className="mb-6 w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        + Nueva conversación
      </button>

      <h3 className="mb-3 text-sm text-gray-400">
        Historial
      </h3>

      <div className="space-y-2">
        {state.conversations.map(chat => (
          <div
            key={chat.id}
            className={`flex items-center gap-2 rounded-lg p-2 ${
              state.activeId === chat.id
                ? 'bg-gray-700'
                : 'bg-gray-800'
            }`}
          >
            <button
              disabled={disabled}
              onClick={() =>
                dispatch({
                  type: 'SELECT_CHAT',
                  payload: chat.id,
                })
              }
              className="flex-1 truncate text-left text-sm text-white disabled:opacity-50"
            >
              {chat.title}
            </button>

            <button
              disabled={disabled}
              onClick={() =>
                dispatch({
                  type: 'DELETE_CHAT',
                  payload: chat.id,
                })
              }
              className="text-red-400 hover:text-red-300 disabled:opacity-50"
              aria-label="Eliminar conversación"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default History
