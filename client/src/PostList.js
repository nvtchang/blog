import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from './CommentCreate'
import CommentList from "./CommentList";

const PostList = () => {
    const [posts, setPosts] = useState({});
    const urlPost = 'http://localhost:4002'

    const fetchPosts = async () => {
        const res = await axios.get( `${urlPost}/posts`)
        console.log("res.data", res.data)
        setPosts(res.data)
    }

    //the empty array in useEffect tell React that only run function 1 time
    useEffect(() => {
        fetchPosts();

    }, [])

    //TO DO: ehance later, move renderedPosts to components folder
    const renderedPosts = Object.values(posts).map( post => {
        return (
        <div 
            className="card" 
            style={{ width: '30%', marginBottom: '20px'}}
            key =  {post.id } 
            >    
                <div className="card-body">
                    <h3> {post.title} </h3>
                    <CommentList comments = {post.comments}/>
                    <CommentCreate postId={post.id} />
                    
                </div>

        </div> 
        )
    })

    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>  
}

export default PostList
