import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then(response => {
            console.log(response)
            return response.data

        })
    }
}