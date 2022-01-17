import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.div`
  grid-area: n;
  background-color: white;
  padding: 25px;
  border: 1px solid #CFDEE3;
  font-size: 25px;
  self-items: center;
  justify-itmes: center;
`;

export const PageLink = styled(Link)`
  color: black;
  text-decoration: none;
  transition: all 0.5s ease;

  &:focus {
    color: #be64f2;
  }
`;

export const Profile = styled.div`
  padding-top: 10px;
`;

export const Message = styled.div`
  padding-top: 10px;
`;

export const Music = styled.div`
  padding-top: 10px;
`;

export const News = styled.div`
  padding-top: 10px;
`;

export const Settings = styled.div`
  padding-top: 10px;
`;

export const Users = styled.div`
  padding-top: 50px;
`;