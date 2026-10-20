
const MODEL = 'deepseek-r1:1.5b'

export async function sendMessageToOllama(messages, signal) {
  const response = await fetch('/ollama/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      messages,
      stream: false,
    }),
    signal,
  })

  if (!response.ok) {
    throw new Error(
      `Error al conectar con Ollama: ${response.status}`
    )
  }

  const data = await response.json()

  return data.message.content
}
