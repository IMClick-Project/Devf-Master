
import { useForm } from 'react-hook-form'

function PromptForm({ onSend }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    onSend(data.prompt)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl rounded-2xl bg-gray-800 p-4 shadow-lg"
    >
      <textarea
        placeholder="Escribe tu pregunta..."
        className="h-32 w-full resize-none rounded-xl bg-gray-900 p-4 text-white outline-none focus:ring-2 focus: ring-blue-500"
        {...register('prompt', {
          required: 'Debes escribir una pregunta',
          minLength: {
            value: 5,
            message: 'Escribe al menos 5 caracteres',
          },
        })}
      />

      {errors.prompt && (
        <p className="mt-2 text-sm text-red-400">
          {errors.prompt.message}
        </p>
      )}

      <button
        type="submit"
        className="mt-4 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  )
}

export default PromptForm
