import React from 'react'
import PostItem from './PostItem'

export default function PostList({ posts, title, deletePost }) {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts.map((post, index) => <PostItem deletePost={deletePost} number={index + 1} key={post.id} post={post} />)}
        </>
    )
}
