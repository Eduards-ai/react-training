import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, msg: "Hi, how are you?", likesCount: 12 },
        { id: 2, msg: "It's, my first post", likesCount: 30 },
      ],
      newPostText: "",
    },
    dialogPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("State changed!");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
