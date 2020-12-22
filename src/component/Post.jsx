import React from 'react';
const Post=({match})=>{
    return(
    <h1 style={{textAlign:'center'}}>Hello,{match.params.postID}</h1>
    );
}
export default Post;