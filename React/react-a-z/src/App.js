import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' },
    { id: 4, title: 'JavaScript', body: 'Description' },
    { id: 5, title: 'JavaScript', body: 'Description' },
  ])
  const [posts2, setPosts2] = useState([
    { id: 1, title: 'React', body: 'Description' },
    { id: 2, title: 'React', body: 'Description' },
    { id: 3, title: 'React', body: 'Description' },
    { id: 4, title: 'React', body: 'Description' },
    { id: 5, title: 'React', body: 'Description' },
  ])
  return (
    <div className="App">
      <PostList posts={posts} title='JavaScript' />
      <PostList posts={posts2} title='React' />

    </div>
  );
}

export default App;
