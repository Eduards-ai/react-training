// import React from 'react'
// import { Container, User, LeftBlock, ImageContainer, Image, ButtonContainer, Button, RightBlock, UserInfoLeft, UserInfoRight, UserName, UserStatus, UserCountry, UserCity } from "./Users-style";
// import * as axios from "axios";
// import userPhoto from "../../assets/images/user.png"

// const UsersClearFunc = (props) => {
//     if(props.users.length === 0 ) {

//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
//             props.setUsers(res.data.items)
//         });
//     }

//     return (
//         <Container>
//             {props.users.map(u => <User key={u.id}>
//                 <LeftBlock>
//                     <ImageContainer>
//                         <Image src={u.photos.small != null ? u.photos.small : userPhoto} />
//                     </ImageContainer>
//                     <ButtonContainer>
//                         {u.followed
//                             ? <Button onClick={() => { props.unfollow(u.id) }}>Unfollow</Button>
//                             : <Button onClick={() => { props.follow(u.id) }}>Follow</Button>
//                         }
//                     </ButtonContainer>
//                 </LeftBlock>
//                 <RightBlock>
//                     <UserInfoLeft>
//                         <UserName>{u.name}</UserName>
//                         <UserStatus>{u.status}</UserStatus>
//                     </UserInfoLeft>
//                     <UserInfoRight>
//                         <UserCountry>{"u.location.country"}</UserCountry>
//                         <UserCity>{"u.location.city"}</UserCity>
//                     </UserInfoRight>
//                 </RightBlock>
//             </User>)}
//         </Container>
//     )
// }

// export default UsersClearFunc;
