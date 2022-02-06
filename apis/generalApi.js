import String from '../resources/strings/string'
import axios from 'axios'

const apiGet = async (method) => {
    try {
        const URL = String.url + method
        const response = await axios.get(URL)
        return { state: true, data: response.data }
    } catch (e) {
        return { state: false, message: e.message }
    }

}

const apiPost = async (method, object) => {
    try {
        const URL = String.url + method
        const response = await axios.post(URL, object)
        return { state: true, data: response.data }
    } catch (e) {
        return { state: false, message: e.message }
    }

}

export { apiGet, apiPost }