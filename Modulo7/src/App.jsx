
import { useState } from 'react'
import PromptForm from './components/PromptForm'

function App() {
  const [messages, setMessages] = useState([])

  const handleSend = (prompt) => {
    setMessages((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        text: prompt,
      },
    ])
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800 p-5">
        <h1 className="text-2xl font-bold text-blue-400">
          DevfSeek
        </h1>
        <p className="text-sm text-gray-400">
          Proyecto FrontEnd Avanzado - Parte 1
        </p>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-col items-center px-5 py-12">
        <h2 className="mb-3 text-center text-3xl font-bold">
          ¡Hola! ¿En qué puedo ayudarte?
        </h2>

        <p className="mb-10 text-center text-gray-400">
          Escribe una consulta para comenzar.
        </p>

        <PromptForm onSend={handleSend} />

        <section className="mt-10 w-full max-w-2xl space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="rounded-xl border border-gray-700 bg-gray-800 p-4"
            >
              <p className="mb-2 text-xs font-semibold text-blue-400">
                Tu mensaje
              </p>
              <p className="whitespace-pre-wrap break-words">
                {message.text}
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}

export default App
