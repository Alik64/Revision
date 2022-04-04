import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Best programming language :)' },
    { id: 2, title: 'Python', body: 'Is not a snake' },
    { id: 3, title: 'React', body: 'Best framework' },
    { id: 4, title: 'Java', body: 'Is not JS!' },
    { id: 5, title: 'HTML', body: 'HyperText Markup Language' },
  ])
  const [selectSort, setSelectSort] = useState('')


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id != id))
  }
  const sortPosts = (sort) => {
    setSelectSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">

      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MySelect
          value={selectSort}
          onChange={sortPosts}
          defaultValue='Filter'
          options={[
            { value: 'title', name: 'Par nom' },
            { value: 'body', name: 'Par description' }
          ]}
        />
      </div>
      {
        posts.length !== 0
          ? <PostList posts={posts} deletePost={deletePost} title='JavaScript' />
          : <h3 className="avertissement">"La section est vide!"</h3>
      }


    </div>
  );
}

export default App;
