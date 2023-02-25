/* eslint-disable */
import React from 'react';
import './RecordsComponent.css';
import RecordCardComponent from '../RecordCardComponent/RecordCardComponent';
import makeRequest from '../../utils/makeRequest';
import getLikes from '../../endpoints/fetchAllRecords.json';
export default function RecordsComponent(props){
    const [likes,setLikes] = React.useState([]);
     React.useEffect(()=>{(async()=>{
        setLikes(await Promise.all(props.records.map(async(item,i)=>makeRequest({...getLikes,url:getLikes.url+"/"+item.id+"/likes"}))))
        })()
     },[]);
    if(likes){
        return (
        <div className="records">
            <div className='records-title'>
                        <h1>all the songs</h1>
                    </div>
            <div className='records-content'>
                {props.records.map((item,i)=><RecordCardComponent key={i} data={item} index={i} likes={likes[i]}/>
                )}
            </div>:
            
        </div>
    )
        }
    else{
        return <p>loading ...</p>
    }
}