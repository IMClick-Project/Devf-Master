
export const initialState = {
  conversations: [],
  activeId: null,
}

export function chatReducer(state, action) {
  switch (action.type) {
    case 'CREATE_CHAT': {
      const chat = {
        id: crypto.randomUUID(),
        title: 'Nueva conversación',
        messages: [],
      }

      return {
        ...state,
        conversations: [chat, ...state.conversations],
        activeId: chat.id,
      }
    }

    
    case 'CREATE_CHAT_WITH_ID': {
    const chat = {
        id: action.payload,
        title: 'Nueva conversación',
        messages: [],
    }

    return {
        ...state,
        conversations: [chat, ...state.conversations],
        activeId: chat.id,
    }
    }


    case 'SELECT_CHAT':
      return { ...state, activeId: action.payload }

    case 'ADD_MESSAGE':
      return {
        ...state,
        conversations: state.conversations.map(chat =>
          chat.id === action.payload.chatId
            ? {
                ...chat,
                title: chat.messages.length === 0
                  ? action.payload.message.content.slice(0, 35)
                  : chat.title,
                messages: [...chat.messages, action.payload.message],
              }
            : chat
        ),
      }

    case 'DELETE_CHAT': {
      const conversations = state.conversations.filter(
        chat => chat.id !== action.payload
      )

      return {
        ...state,
        conversations,
        activeId: state.activeId === action.payload
          ? (conversations[0]?.id ?? null)
          : state.activeId,
      }
    }

    default:
      return state
  }
}
