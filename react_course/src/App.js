import React, { useState } from 'react';
import {Route ,BrowserRouter,  Routes} from 'react-router-dom'
import './styles/App.css';

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
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Homepage/>}/>
        <Route path='/prodactview' exact element={<Homepage/>}/>
      </Routes>
    </BrowserRouter>


    <PostList posts={posts} title={'List=1'}/>
    <Counter/>
    <ClassCounter/>
    </>
  );
}

export default App;
