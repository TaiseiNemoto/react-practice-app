export const initialState = {
  selectedId: 0,
  messages: {
    0: 'Hello Taylor',
    1: 'Hello Alice',
    2: 'Hello Bob',
  },
};

type Messages = {
  [key: number]: string;
};

type State = {
  selectedId: number;
  messages: Messages;
};

type Action =
  | {
      type: 'changed_selection';
      contactId: number;
    }
  | {
      type: 'edited_message';
      message: string;
    }
  | {
      type: 'sent_message';
    }
  | {
      type: string;
      contactId: number;
      message: string;
    };

export function messengerReducer(state: State, action: Action) {
  switch (action.type) {
    case 'changed_selection': {
      return {
        ...state,
        selectedId: action.contactId,
        message: '',
      };
    }
    case 'edited_message': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      };
    }
    case 'sent_message': {
      return {
        ...state,
        message: '',
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
