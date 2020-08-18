import React from 'react'
import './InfoBar.css'
// import closeIcon from '../../'

let InfoBar=({room})=>(
    <div className='infoBar'>
        <div className='leftInnerContainer'>
<img className='onlineIcon' src=''/>
<h3>{room}</h3>


        </div>
        <div className='rightInnerContainer'>
            <a href='/'><img src='' alt='close image'/></a>

        </div>


    </div>
)

export default InfoBar