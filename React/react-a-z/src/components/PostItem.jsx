import React from 'react'
import MyButton from './UI/button/MyButton'

export default function PostItem(props) {
    const deletePost = (id) => {

        props.deletePost(id)
    }


    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <p>
                    {props.post.body}
                </p>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => deletePost(props.post.id)}>Supprimer</MyButton>
            </div>
        </div>
    )
}
