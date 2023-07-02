import React, {useState, useEffect} from "react";

const CommentList = ({ comments }) => {
    const renderedComment = comments.map(comment => {
        let content

        if(comment.status === 'approved') {
            content = comment.content
        }

        if(comment.status === 'pending') {
            content = 'This comment is awaiting moderation'
        }

        if(comment.status === 'rejected') {
            content = 'This comment has been rejected'
        }

        return <li key={comment.id}>{content}</li>
    })

    return <ul>
        {renderedComment}
    </ul>
}

export default CommentList
