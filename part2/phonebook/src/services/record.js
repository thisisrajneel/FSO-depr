import axios from 'axios'

const baseurl = 'http://localhost:3001/persons'

const getAll = async () => {
    const request = axios.get(baseurl)
    const response = await request
    return response.data
}

const create = async (obj) => {
    const request = axios.post(baseurl, obj)
    const response = await request
    return response.data
}

export default {
    getAll,
    create
}