import React from "react";
import { ContentContainer } from "../profile/Profile-style";
import MyPostsContainer from "./posts/MyPostsContainer";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = ( props ) => {
  return (
    <ContentContainer>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </ContentContainer>
  );
};

export default Profile;
