import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;

export const Contacts = styled.div`
  padding: 10px;
`;

export const Contact = styled.div`
  
`;

export const ContactLink = styled(Link)`
    color: lightsalmon;
    text-decoration: none;
  &:focus {
    color: gold;
  }
`;

export const Messages = styled.div`
  padding: 10px;
`;

export const Message = styled.div`
  color: blueviolet;
`;

export const MessageArea = styled.div`
  display:flex;
`;

export const TextArea = styled.textarea`
  
`;

export const Button = styled.button`
  width: 50px;
`;