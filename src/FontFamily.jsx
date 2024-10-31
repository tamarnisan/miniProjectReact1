import React from 'react'



function FontFamily(props) {
    function clickfont(e) {
        props.onFontFamilyChange(e);
        
    }
    
    const fontFamilyStyle = { width: 2, height: 30, margin: 20 }
    return (
      
            
                <div>
                    <label htmlFor="font-family">Select Font-Family: </label>
                    <select style={{height:40,width:"fit-content",fontSize:20}} id="font-family" onChange={(e)=>clickfont(e.target.value)}>
                        {props.arrayFontFamily.map((font, index) => (
                            <option style={{ ...fontFamilyStyle, fontFamily: font }} key={index} value={font}>
                                {font}
                            </option>
                        ))}
                    </select>
                </div>

               

    
    );
}
    export default FontFamily;