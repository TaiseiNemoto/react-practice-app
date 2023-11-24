export const initialState = {
  selectedId: 0,
  message: 'Hello',
};

type State = {
  selectedId: number;
  message: string;
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
        message: action.message,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
