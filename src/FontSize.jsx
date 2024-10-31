import React from 'react';
 

 function ChangeFontSize(props){
  function clickfontSize(e) {
    console.log(e);
    props.onFontSizeChange(e);
   
}
const fontSizeStyle = { width: 2, height: 30, margin: 20 }
    return (
    <>
    <div>
      <label htmlFor="font-size">Select Font Size: </label>
      <select style={{height:40,width:"fit-content",fontSize:20}} id="font-size" onChange={(e)=>clickfontSize(e.target.value)}>
        {props.fontSizeLetters.map((size, index) => (
          <option style={{ ...fontSizeStyle }} key={index} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
    
    </>
   
);
    

}
export default ChangeFontSize