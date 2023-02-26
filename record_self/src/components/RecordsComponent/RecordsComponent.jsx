/* eslint-disable */
import React from 'react';
import './RecordsComponent.css';
import RecordCardComponent from '../RecordCardComponent/RecordCardComponent';
import makeRequest from '../../utils/makeRequest';
import getLikes from '../../endpoints/fetchAllRecords.json';
import icon_genre from '../../assets/icon-genre.svg';
import icon_grid from '../../assets/icon-grid.svg';
import GenreMenuComponent from '../GenreMenuComponent/GenreMenuComponent';
import {dataContext} from '../../DataContext/dataContext';
import { useEffect } from 'react';
export default function RecordsComponent(){
    const {data,setData} = React.useContext(dataContext);
    const [likes,setLikes] = React.useState([]);
    const [genreMenu,setGenreMenu] = React.useState(false);
    const [records,setRecords] = React.useState(data);
    const handleClick = () => {
        setGenreMenu(!genreMenu);
    }
    useEffect(()=>{
        if(!genreMenu)
        setRecords(data);
    },[genreMenu])
    const genreChange = (genre) => {
        console.log(data.filter((item)=>item.genre.name===genre));
        setRecords(data.filter((item)=>item.genre.name===genre));
    }
     React.useEffect(()=>{(async()=>{
        setLikes(await Promise.all(data.map(async(item,i)=>makeRequest({...getLikes,url:getLikes.url+"/"+item.id+"/likes"}))))
        })()
     },[]);
    if(likes){
        return (
        <div className="records">
           <div className='records-title'>
           {(genreMenu)?<h1>genres</h1>:<h1>all the songs</h1>}
                        <img src={(genreMenu)?icon_grid:icon_genre} onClick={handleClick} alt='icon_genre'/>
            </div>
            {(genreMenu)?<GenreMenuComponent genreChangeFunc={genreChange}/>:null}
            <div className='records-content'>
                {records.map((item,i)=><RecordCardComponent key={i} data={item} index={i} likes={likes[i]}/>
                )}
            </div>
            
        </div>
    )
        }
    else{
        return <p>loading ...</p>
    }
}