import React from 'react'
import { Posts, OurPost } from '../post/Post-style'

const Post = (props) => {
    return (
        <>
            <Posts>
                <OurPost>{ props.message } {props.likes}</OurPost>
            </Posts>
        </>
    )
}

export default Post
