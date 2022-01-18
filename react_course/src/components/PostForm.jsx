import React from 'react'
import MyButton from '../components/botton/MyButton';
import MyInput from '../components/input/MyInput';
import { useState } from 'react';

const PostForm = ({create}) => {

        const [post, setPost] = useState({title: '', body: ''})

        const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    
    }
    return (
        <form>
        <MyInput 
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text" 
        placeholder='Назва товару' />

        <MyInput 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder='Опис товару' />
        <MyButton onClick={addNewPost}>Додати товар</MyButton>
      </form>
    )

}

export default PostForm
