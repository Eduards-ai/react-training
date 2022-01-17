const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  messagesData: [
    { id: 1, msg: "Hi!" },
    { id: 2, msg: "How are you?" },
    { id: 3, msg: "Yoo" },
  ],
  newMessageBody: "",
  dialogsData: [
    { id: 1, name: "Edik" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Lexa" },
    { id: 4, name: "Dennis" },
    { id: 5, name: "Arthur" },
    { id: 6, name: "Sasha" },
    { id: 7, name: "Egor" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messagesData: [
          ...state.messagesData,
          { id: Date.now().toFixed(0), msg: body },
        ],
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
