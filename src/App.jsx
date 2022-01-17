import React from "react";
import { Wrapper } from "./styles/App-style";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import { Routes, Route } from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings"
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";

function App(props) {
  return (
    <Wrapper>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="profile" element={<Profile store={props.store} />} />
        <Route path="dialogs" element={<DialogsContainer store={props.store} />} />
        <Route path="news" element={<News />} />
        <Route path="music" element={<Music />} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<UsersContainer />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
