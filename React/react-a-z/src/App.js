import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' },
    { id: 4, title: 'JavaScript', body: 'Description' },
    { id: 5, title: 'JavaScript', body: 'Description' },
  ])



  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id != id))
  }
  return (
    <div className="App">

      <PostForm create={createPost} />
      {
        posts.length !== 0
          ? <PostList posts={posts} deletePost={deletePost} title='JavaScript' />
          : <h3 className="avertissement">"La section est vide!"</h3>
      }


    </div>
  );
}

export default App;
