import React from 'react'



function Color(props){

    function clickColor(index) {
        props.colorOnClick(index);
        
    }
    const colorStyle = {width:2,height:30 , margin:20}
    return (
        <>
            <div>
                {props.arrayColor.map((color, index) => <button key={index} style={ {...colorStyle, backgroundColor:color}} onClick={()=>clickColor(index)} > </button>)}
            </div>
        </>
    );
}
export default Color;