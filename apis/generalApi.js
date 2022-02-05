import String from '../resources/strings/string'
import axios from 'axios'

const apiGet = async() => {
    const response = await axios.get(String.url)
    return response.data
}

const apiPost = async(parameters) => {
    const response = await axios.post(String.url,{parameters:parameters})
    return response.json()
}

export{apiGet, apiPost}