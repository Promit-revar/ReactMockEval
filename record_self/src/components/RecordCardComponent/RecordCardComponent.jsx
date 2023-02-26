/* eslint-disable */
import React from 'react';
import './RecordCardComponent.css';
import heart_red from '../../assets/heart-red.svg';
import heart_gray from '../../assets/heart-gray.svg';
export default function RecordCardComponent(props){
    //console.log(props.likes);
    const handleLikeClick = () => {
        console.log(props.data.id,props.likes.like)
        props.likeFunc(props.data.id,props.likes.like);
        
    }
    if(props.likes){
        return(
        <div className={`record-card ${(props.index%2)?"record-card-light":"record-card-dark"}`}>
            <div className='record-image'>
                <img src={props.data.imageUrl} alt={props.data.imageUrl}/>
            </div>
            <div className='record-title-bar'>
                    <div className='record-title'>
                        <p>{props.data.name}</p>
                    </div>
                <div className='heart'>
                    <p>{props.likes.count}</p>
                    {(props.likes.like)?<img onClick={handleLikeClick} src={heart_red} alt='heart_red'/>:<img onClick={handleLikeClick} src={heart_gray} alt='heart_gray'/>}
                </div>
            </div>
            <div className='record-artist'>
                <strong>{props.data.artist.name}</strong> 
            </div> 
            
        </div>
    );
        }
    else{
        return <p>loading ...</p>
    }
}