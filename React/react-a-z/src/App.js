import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
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

  const [post, setPost] = useState({ title: '', body: '' })


  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = { ...post, id: Date.now() }
    setPosts([...posts, newPost])



  }
  return (
    <div className="App">

      <form >
        <MyInput
          type="text"
          placeholder="Titre de l'article"
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="Description"
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}


        />

        <MyButton onClick={addNewPost}>Créer</MyButton>

      </form>
      <PostList posts={posts} title='JavaScript' />


    </div>
  );
}

export default App;
