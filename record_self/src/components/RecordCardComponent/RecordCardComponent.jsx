/* eslint-disable */
import React from 'react';
import './RecordCardComponent.css';
import heart_red from '../../assets/heart-red.svg';
export default function RecordCardComponent(props){
    
    return(
        <div className='record-card'>
            <div className='record-image'>
                <img src={props.data.imageUrl} alt="props.name"/>
            </div>
            <div className='record-title-bar'>
                
                    <div className='record-title'>
                        <p>{props.data.name}</p>
                    </div>
                
                <div className='heart'>
                    <p>2</p>
                    <img src={heart_red} alt='heart_red'/>
                </div>
            </div>
            <div className='record-artist'>
                <strong>{props.data.artist.name}</strong> 
            </div> 
            
        </div>
    )
}