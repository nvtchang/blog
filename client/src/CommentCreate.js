import React, {useState} from "react"
import axios from 'axios'

const CommentCreate = ({ postId }) => {

    const [content, setContent] = useState('')
    const url = 'http://localhost:4001'


    const onSubmit = async (event) => {
        event.preventDefault() //TO DO: what is prevent default?

        //create new comment and associate it with a posts
        await axios.post(`${url}/posts/${postId}/comments`, {
            content
        })
        
        setContent('')
    }

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>New Comment</label>
                <input 
                    value={content} 
                    className="form-control"
                    onChange={ e => setContent(e.target.value)} />

            </div>
            <button className="btn btn-primary">Submit</button>

        </form>
    </div>
}

export default CommentCreate