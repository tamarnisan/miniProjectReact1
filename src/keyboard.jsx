import React from 'react'



function MakeKeyboard(props){
    const myStyle={
        width:"600px",
        hight:"50px",
        display: "flex",
        flexWrap: "wrap",
        size:"50px"
    }
    const buttonStyle = {
        fontSize: "30px",  
        width: "50px",
        height: "50px",
        margin: "5px",
        backgroundColor: "black",
        color: "white",
        border:"inset",
        textAlign:"center",
        justifyContent: "center",    
        alignItems: "center"      

    };
    return(
        <div   style={myStyle}  className="keyboard" >
            { props.arrayLetters.map((letter,index) => <button key={index} style={buttonStyle}> {letter} </button>)}
        </div> 
   );
}
export default MakeKeyboard;