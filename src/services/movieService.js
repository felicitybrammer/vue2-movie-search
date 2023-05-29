import axios from 'axios'

const apiClient = axios.create({
    baseUrl: `moviesdatabase.p.rapidapi.com`,
    withCredentials: false, 
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apiKey: '0702956e69msh60d428207c19d86p15a11cjsnfe5d02a497b6'
    }
})
// apiKey b6da6e960d3fbf612b3201f567dbb660

export default {
    async getMovieResults(movieTitle) {
        try{
            const response = await apiClient.get(`/titles/search/title?api_key={apiKey}&query=${this.movieTitle}&page=1&language=en-US`)
            return response.data.results
            console.log(response.data.results)
        }
        catch (error) {
            console.log(error)
        }
        
    }
}