import React from 'react';

const PostItem = (props) => {  
        return (
           <div className="post">
               <div className="post__content">
                   <strong className='strong'> {props.post.title}</strong>
                   <div>
                       {props.post.body}
                   </div>
                   <div>
                       <button>Delete Button</button>
                   </div>
               </div>
           </div>
        );
    
};

export default PostItem;
