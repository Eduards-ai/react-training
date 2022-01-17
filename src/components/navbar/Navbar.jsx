import React from "react";
import {
  NavContainer,
  Profile,
  Message,
  PageLink,
  Settings,
  News,
  Music,
  Users,
} from "../navbar/Navbar-style";

const Navbar = () => {
  return (
    <NavContainer>
        <Profile>
          <PageLink to="/profile">Profile</PageLink>
        </Profile>
        <Message>
          <PageLink to="/dialogs">Message</PageLink>
        </Message>
        <News>
          <PageLink to="/news">News</PageLink>
        </News>
        <Music>
          <PageLink to="/music">Music</PageLink>
        </Music>
        <Settings>
          <PageLink to="/settings">Settings</PageLink>
        </Settings>
        <Users>
          <PageLink to="/users">Find Users</PageLink>
        </Users>
    </NavContainer>
  );
};

export default Navbar;
