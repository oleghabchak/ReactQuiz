import React, { useState } from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
    const [posts, setPosts] = useState([
      { id: 1, 
        title: 'BMW', 
        body:'(Баварські моторні заводи) — німецький автобудівний та авіамоторний концерн і однойменна торгова марка автомобілів преміум- та люкс-класу і мотоциклів.'},
      { id: 2, 
        title: 'Volkswagen', 
        body:'Створена в 1930-х роках ХХ ст. як автобудівник для «простого народу». Протягом своєї історії завдяки політиці керівництва, надійності та якості компанія стала світовим і європейським лідером в галузі масового автомобілебудування.'},
      { id: 3, 
        title: 'Audi', 
        body:"Audi представляють одну з чотирьох автомобільних компаній, які об'єдналися для створення попередника Audi — Auto Union. Гасло Audi — «Vorsprung durch Technik», що означає «Прогрес через технології»."}
    ])

    const createPost = (newPost) => {
      setPosts([...posts,newPost])
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }
    
  return (
    <div className='App'>
     <PostForm create={createPost}/>
     <PostList remove={removePost}  posts={posts} title={'Список товарів'}/>
    </div>
  );
}

export default App;
