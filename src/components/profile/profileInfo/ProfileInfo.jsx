import React from "react";
import {
    ContentImg,
    User,
    Logo,
  } from "./ProfileInfo-style";

const ProfileInfo = () => {
  return (
    <>
      <ContentImg src="https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270" />
      <User>
        <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9EXUSa_uX8p8GJQ5Si7rIMf4OOPxK5Piag&usqp=CAU" />
      </User>
    </>
  );
};

export default ProfileInfo;
