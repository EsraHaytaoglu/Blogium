import React, { useEffect, useState } from 'react';
import { api } from '../api';
import PostForm from "./PostForm"


function EditPost(props) {
    const { id } = props.match.params;
    const [post, setPost] = useState({})
    useEffect(() => {
        api()
            .get(`/posts/${id}`)
            .then((res)=> {
                setPost({ title: res.data.title, content: res.data.content })
        })
    }, [])

    return (
        <div className='container'>
        <h1> Post Edit Form </h1>
        <PostForm post={post} />
        </div>
    )
}

export default EditPost;