
import { useForm } from 'react-hook-form'

function PromptForm({ onSend, loading }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const success = await onSend(data.prompt)

    if (success) {
      reset()
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full rounded-2xl bg-gray-800 p-4"
    >
      <textarea
        placeholder="Pregunta algo a DeepSeek..."
        className="h-28 w-full resize-none rounded-xl bg-gray-900 p-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
        {...register('prompt', {
          required: 'Escribe una pregunta',
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
        disabled={loading}
        className="mt-3 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Pensando...' : 'Enviar'}
      </button>
    </form>
  )
}

export default PromptForm
