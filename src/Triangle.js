import React from 'react';



const Triangle = ({Vertices, Color, delay, handleClick })=>{
    const pathData = [
        'M', Vertices[0][0], Vertices[0][1],
        'L', Vertices[1][0], Vertices[1][1],
        'L', Vertices[2][0], Vertices[2][1],
        
        
        'Z'
    ].join(' ')

    const styles = {
        animation: 'bounce 1.2s ease both infinate',
        transformOrigin: '50% 100%',
        animationDelay: `${ delay }ms`
    }
    return (
        <React.Fragment>
            <path  style= {styles} 
            d={ pathData} fill={ Color }
            onClick={handleClick}
            stroke= '#75450e'
    strokeWidth='2px'
            />
<text textAnchor="middle" style={{fontSize: "1px"}} x="50%" y="50%">
    Click on My background to see my true colors
  </text>
        </React.Fragment>
    )
    }

export default Triangle;