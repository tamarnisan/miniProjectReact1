import React from 'react'



function MakeKeyboard(props) {
    const myStyle = {
        width: "900px",
        display: "flex",
        flexWrap: "wrap",
        size: "50px",
        fontSize:props.fontSize,
        paddingTop:"40px",
        paddingLeft:400,
        justifyContent:"center"
    }
    const buttonStyle = {
        fontSize: "30px",
        width: "fit-content",
        height: "70px",
        margin: "5px",
        backgroundColor: "black",
        color: "white",
        border: "inset",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        

    };
    function clickLetter(index) {
        props.onKeyClicked((index) 
        )
    }
    return (
        <>
            <div style={myStyle}>
                {props.arrayLetters.map((letter, index) => <button style={buttonStyle}key={index} onClick={() => clickLetter(index)}> {letter} </button>)}
            </div>
        </>
    );
}
export default MakeKeyboard;