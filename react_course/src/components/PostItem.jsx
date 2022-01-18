import React from 'react';
import MyButton from './botton/MyButton';

const PostItem = (props) => {  
        return (
           <div className="post">
               <div className="post__content">
                   <strong className='strong'> {props.post.title}</strong>
                   <div>
                       {props.post.body}
                   </div>
                   <div >
                       <MyButton onClick={() => props.remove(props.post)}>Видалити</MyButton>
                   </div>
               </div>
           </div>
        );
    
};

export default PostItem;
