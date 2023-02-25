/* eslint-disable */
import React from 'react';
import './RecordsComponent.css';
import RecordCardComponent from '../RecordCardComponent/RecordCardComponent';
export default function RecordsComponent(props){
    console.log(props.records)
    return (
        <div className="records-background">
            {props.records.map((item)=><RecordCardComponent data={item}/>
            )}
        </div>
    )
}