import React from 'react'

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
                <button onClick={() => deletePost(props.post.id)}>Supprimer</button>
            </div>
        </div>
    )
}
