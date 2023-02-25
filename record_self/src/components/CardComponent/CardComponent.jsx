/* eslint-disable */
import './CardComponent.css'
import RequestData from '../../endpoints/fetchAllRecords.json'; 
import makeRequest from '../../utils/makeRequest';
import RecordsComponent from "../RecordsComponent/RecordsComponent";
import React from "react";
import {dataContext} from '../../DataContext/dataContext';
export default function CardComponent(props){
    const[sync,setSync] = React.useState(false);
    const {data,setData} = React.useContext(dataContext);
    const handleSyncClick = async() => {
        const res = await makeRequest(RequestData);
        setData(res);
        
        setSync(true);
    }
    
    if(!sync){
    return (
        <div className="card">
            <div className='text'>:((</div>
            <div className='text'>Seems a bit empty in here...</div>
            <button type="button" className="sync_btn" onClick={handleSyncClick}><strong>sync</strong></button>
        </div>
    )
    }
    else{
        return (
            <div className="card">
                {console.log(data)}
                <RecordsComponent records={data}/>
            </div>
        )
    }
}