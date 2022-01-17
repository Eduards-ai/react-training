import React from 'react'
import { Container, PagesCount,Pages, User, LeftBlock, ImageContainer, Image, ButtonContainer, Button, RightBlock, UserInfoLeft, UserInfoRight, UserName, UserStatus, UserCountry, UserCity } from "./Users-style";
import * as axios from "axios";
import userPhoto from "../../assets/images/user.png"

// Если не отнаследуемся от React.Component то наш объект созданный с помощью класса не будет иметь определенных методов чтобы React смог с ним взаимодействовать!
/*
Каждый класс должен определить метод render!!! потому что в конечном итоге React когда будет создавать объект с помощью этого класса,
он от этого объекта будет хотеть самого главного, получить от него JSX. Именно метод render возвращает нам JSX.(Props в render не приходят!!!!!!)
*/
class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
                })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <Container>
                <Pages>
                    {pages.map(p => {
                        return <PagesCount fontWeight={this.props.currentPage === p && 'bold'} onClick={ () => { this.onPageChanged(p) }}>{p}</PagesCount>
                    })}
                </Pages>
                {this.props.users.map(u => <User key={u.id}>
                    <LeftBlock>
                        <ImageContainer>
                            <Image src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </ImageContainer>
                        <ButtonContainer>
                            {u.followed
                                ? <Button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</Button>
                                : <Button onClick={() => { this.props.follow(u.id) }}>Follow</Button>
                            }
                        </ButtonContainer>
                    </LeftBlock>
                    <RightBlock>
                        <UserInfoLeft>
                            <UserName>{u.name}</UserName>
                            <UserStatus>{u.status}</UserStatus>
                        </UserInfoLeft>
                        <UserInfoRight>
                            <UserCountry>{"u.location.country"}</UserCountry>
                            <UserCity>{"u.location.city"}</UserCity>
                        </UserInfoRight>
                    </RightBlock>
                </User>)}
            </Container>
        )    
    }
}

export default Users;
