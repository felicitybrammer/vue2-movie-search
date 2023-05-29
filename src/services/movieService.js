import axios from 'axios'

const apiClient = axios.create({
    baseUrl: `moviesdatabase.p.rapidapi.com`,
    withCredentials: false, 
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getMovieResults() {
        return apiClient.get(`/titles/search/title/Titanic`)
    }
}