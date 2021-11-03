import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { api } from '../api';
import PostForm from "./PostForm"


function EditPost() {
    const { id } = useParams();
    const post = useSelector(state => state.postDetail)

    return (
        <div className='container'>
        <h1> Post Edit Form </h1>
        <PostForm post={post} />
        </div>
    )
}

export default EditPost;