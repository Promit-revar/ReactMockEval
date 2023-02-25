/* eslint-disable */
import React from 'react';
import './RecordCardComponent.css';
export default function RecordCardComponent(props){
    
    return(
        <div className='record-card'>
            <div className='record-image'>
                <img src={props.data.imageUrl} alt="props.name"/>
            </div>
            
        </div>
    )
}