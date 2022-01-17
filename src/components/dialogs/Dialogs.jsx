import React from "react";
import {
  Container,
  Messages,
  Contacts,
  MessageArea,
  Button,
  TextArea
} from "../dialogs/Dialogs-style";
import DialogItem from "./dialogItem/DialogItem";
import Msg from "./message/Msg";

const Dialogs = (props) => {
  let state = props.dialogPage;
  let newMessageValue = state.newMessageBody;

  let dialogsElements = state.dialogsData
    .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />
    );
    
    let messagesElements = state.messagesData
    .map(m => <Msg message={m.msg} key={m.id}/>
    );


      let onSendMessageClick = () => {
        props.sendMessage();
      }

      let onNewMessageChange = (e) => {
        let message = e.target.value;
        props.newMessageChange(message);
      }

  return (
    <Container>
      <Contacts>
        {dialogsElements}
      </Contacts>
      <Messages>
        {messagesElements}
        <MessageArea>
          <TextArea
          placeholder="Enter your message..."
          value={newMessageValue}
          onChange={onNewMessageChange}
          />
          <Button onClick={ onSendMessageClick }>Send</Button>
        </MessageArea>
      </Messages>
    </Container>
  );
};

export default Dialogs;
