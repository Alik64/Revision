import React, { useMemo, useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Best programming language :)' },
    { id: 2, title: 'Python', body: 'Is not a snake' },
    { id: 3, title: 'React', body: 'Best framework' },
    { id: 4, title: 'Java', body: 'Is not JS!' },
    { id: 5, title: 'HTML', body: 'HyperText Markup Language' },
  ])
  const [selectSort, setSelectSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')


  const sortedPosts = useMemo(() => {

    if (selectSort) {
      return [...posts].sort((a, b) => a[selectSort].localeCompare(b[selectSort]))
    }
    return posts
  }, [selectSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }
  const sortPosts = (sort) => {
    setSelectSort(sort)
  }
  return (
    <div className="App">

      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          placeholder='Recherche...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
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
        sortedAndSearchedPosts.length !== 0
          ? <PostList posts={sortedAndSearchedPosts} deletePost={deletePost} title='JavaScript' />
          : <h3 className="avertissement">"La section est vide!"</h3>
      }


    </div>
  );
}

export default App;
