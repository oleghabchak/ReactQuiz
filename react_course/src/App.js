import React, { useState } from 'react';
import Counter from './components/Counter';
import './styles/App.css';
import ClassCounter from './components/ClassCounter';
// import PostItem from './components/PostItem';
import PostList from './components/PostList';

function App() {
    const [posts, setPosts] = useState([
      {id: 1, title: 'oleg 1', body:'erf4'},
      {id: 2, title: 'oleg 2', body:'3sdeh4'},
      {id: 3, title: 'oleg 3', body:'2ert4'}
    ])
   
  return (
    <>
    
    <PostList posts={posts} title={'List=1'}/>
    <Counter/>
    <ClassCounter/>
    </>
  );
}

export default App;
