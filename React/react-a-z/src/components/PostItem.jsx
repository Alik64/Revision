import React from 'react'

export default function PostItem(props) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <p>
                    {props.post.body}
                </p>
            </div>
            <div className="post__btns">
                <button>Supprimer</button>
            </div>
        </div>
    )
}
