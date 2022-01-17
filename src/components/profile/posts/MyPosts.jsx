import React from "react";
import { MyPost, TextArea, Container, Button, Wrapper } from "./MyPosts-style";
import Post from "./post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let postsElements = props.posts.map(p => <Post message={p.msg} likes={p.likesCount} key={p.id} />)

  // let [newPost, setNewPost] = useState('');
  // let [postElements, setPostElements] = useState(postsFromData);

  let onAddPost = () => {
    // Current - ссылается на нативный html элемент! и мы забираем у этого html элемента значение(textArea)!
    props.addPost();
    // const myNewPost = {
    //   id: Date.now(),
    //   msg: newPost,
    //   likesCount: 0
    // }
    // setPostElements([...postElements, myNewPost])
    // setNewPost('')

  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  // ref={newPostElement} - с помощью такой конструкции, мы говорим ССЫЛКЕ что она привязывается к TEXTAREA!
  // Потом мы можем обращаться с помощью этой ссылке. Но чтобы нам обратиться к элементу чтобы забрать нам его значение, то мы обращаемся к current.value!

  return (
    <Container>
      <MyPost>My Post</MyPost>
      <Wrapper>
        <TextArea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
        />
        <Button onClick={onAddPost}>Add Post</Button>
      </Wrapper>
      {postsElements}
    </Container>
  );
};

export default MyPosts;
