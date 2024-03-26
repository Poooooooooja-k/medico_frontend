import axios from 'axios'


const token=localStorage.getItem('access')?JSON.parse(localStorage.getItem('access')):""
const refresh=localStorage.getItem('refresh')?JSON.parse(localStorage.getItem('refresh')):""

export const AxiosInstance=axios.create({
    baseURL:'http://127.0.0.1:8000/',
    'Content-type':'application/json',
    headers:{Authorization:localStorage.getItem('access')? `Bearer ${token}`:null}
})

