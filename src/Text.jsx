import React from 'react'

function Text(props){
    console.log('props: ', props);
    return(
<div>{props.text}</div>
);
};
export default Text;