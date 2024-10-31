import React from 'react'



function MakeKeyboard(props) {
    function clickLetter(index) {
        props.onKeyClicked((index) 
        )
    }
    return (
        <>
            <div >{props.text} </div>
            <div>
                {props.arrayLetters.map((letter, index) => <button key={index} onClick={() => clickLetter(index)}> {letter} </button>)}
            </div>
        </>
    );
}
export default MakeKeyboard;