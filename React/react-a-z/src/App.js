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

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')


  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = { id: Date.now(), title, body }
    setPosts(
      [...posts, newPost]
    )
    setTitle('')
    setBody('')


  }
  return (
    <div className="App">

      <form >
        <MyInput
          type="text"
          placeholder="Titre de l'article"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <MyInput
          type="text"
          placeholder="Description"
          value={body}
          onChange={e => setBody(e.target.value)}

        />

        <MyButton onClick={addNewPost}>Créer</MyButton>

      </form>
      <PostList posts={posts} title='JavaScript' />


    </div>
  );
}

export default App;
