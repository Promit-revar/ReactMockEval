/* eslint-disable */
import React from "react";
import './GenreMenuComponent.css';
import {dataContext} from '../../DataContext/dataContext';
export default function GenreMenuComponent(props){
    const {data,setData} = React.useContext(dataContext);
    const genres = [...new Set(data.map((item)=>item.genre.name))];
    const [genre,setGenre] = React.useState(genres[0]);
    const handleChange = (event) => {
        setGenre(event.target.value);
        props.genreChangeFunc(event.target.value);
    }
    React.useEffect(()=>{
        props.genreChangeFunc(genre);
    },[]);
    return (
        <div className="genre-menu">
            <div className='genre-menu-content'>
               <img src={require(`../../assets/genre-${genre.toLowerCase()}.png`)} />
                    <select onChange={handleChange}>
                            {genres.map(item=><option key={item.id} value={item}>{item.toLowerCase()}</option>)}
                    </select>
            </div>
        </div>
    )
}