import React, {useState, useEffect} from "react";
import axios from "axios";

const CommentList = ({ comments }) => {
    const renderedComment = comments.map(comment => {
        return <li key={comment.id}>{comment.content}</li>
    })

    return <ul>
        {renderedComment}
    </ul>
}

export default CommentList
