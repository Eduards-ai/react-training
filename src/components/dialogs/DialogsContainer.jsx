import { connect } from "react-redux";
import { updateNewMessageActionCreator, sendMessageActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage,

  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    newMessageChange: (m) => {
      dispatch(updateNewMessageActionCreator(m));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;