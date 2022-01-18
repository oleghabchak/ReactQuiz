import React, { useState , useMemo} from 'react';
import './App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/MySelect';
import MyInput from './components/input/MyInput';

function App() {
    const [posts, setPosts] = useState([
      { id: 1, 
        title: 'Volkswagen', 
        body:'Створена в 1930-х роках ХХ ст. як автобудівник для «простого народу». Протягом своєї історії завдяки політиці керівництва, надійності та якості компанія стала світовим і європейським лідером в галузі масового автомобілебудування.'},
      { id: 2, 
        title: 'BMW', 
        body:'Баварські моторні заводи — німецький автобудівний та авіамоторний концерн і однойменна торгова марка автомобілів преміум- та люкс-класу і мотоциклів.'},
      
      { id: 3, 
        title: 'Audi', 
        body:"Audi представляють одну з чотирьох автомобільних компаній, які об'єдналися для створення попередника Audi — Auto Union. Гасло Audi — «Vorsprung durch Technik», що означає «Прогрес через технології»."}
    ])

    const [selectedSort,  setSelectedSort] = useState ('')
    const [searchQuery, setSearchQuery] = useState('')


    const sortedPosts = useMemo( ()=> {
      console.log(654687654354);
      if (selectedSort) {
        return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
      }
      return posts;

    }, [selectedSort, posts])

    const sortedAdnSearchedPosts = useMemo(()=>{
      return sortedPosts.filter(post => post.title.includes(searchQuery))
    }, [searchQuery, sortedPosts])



    const createPost = (newPost) => {
      setPosts([...posts,newPost])
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }
    const sortPost = (sort) => {
      setSelectedSort(sort);
      
    }
    
  return (
    <div className='App'>
     <PostForm create={createPost}/>
      <div>
        <MyInput
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Пошук...'
        />
        <MySelect
        value={selectedSort}
        onChange={sortPost}
          defaultValue='Сортування'
          options={[
            {value:'title', name: 'За назвою' },
            {value:'body', name: 'За описом' }
          ]}
        />
      </div>
      {posts.length
      ? <PostList remove={removePost}  posts={sortedAdnSearchedPosts} title={'Список товарів'}/>
      :<div className='appText'>Товарів не знайдено</div> }
     
    </div>
  );
}

export default App;
