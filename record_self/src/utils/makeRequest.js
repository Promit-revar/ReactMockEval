/* eslint-disable */
import axios from 'axios';
export default async function makeRequest({url,method,headers},payload={}) {
    //console.log(payload)
    try{
    const {data} = await axios({
        method,
        url,
        headers,
        ...payload
    })
    return data.data;
}catch(err){
    console.log(err)
}
    
}