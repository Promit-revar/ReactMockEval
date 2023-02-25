/* eslint-disable */
import axios from 'axios';
export default async function makeRequest({url,method,headers},payload={}) {
    const {data} = await axios({
        method,
        url,
        payload,
        headers
    })
    return data.data;
}