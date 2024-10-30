import React from 'react'



function MakeKeyboard(props){
    return(
        <div>
   { props.arrayLetters.map((letter,index) => <button> {letter} </button>)}
   </div> 
   );
}
export default MakeKeyboard;