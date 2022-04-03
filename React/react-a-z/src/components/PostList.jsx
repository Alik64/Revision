import React from 'react'
import PostItem from './PostItem'

export default function PostList({ posts, title }) {
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts.map(post => <PostItem key={post.id} post={post} />)}
        </>
    )
}
