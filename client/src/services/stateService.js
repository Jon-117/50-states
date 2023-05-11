import axios from 'axios'

export default {
    getAllStates() {
        return axios.get('/api/states').then(response => {
            console.log(response)
            return response.data

        })
    },
    setVisited(stateName, visited) {
        let data = {visited: visited}
        return axios.patch('/api/states/' + stateName, data).then( response => {
            return response.data // anything other than 200 will not be caught here, use catch()
        })
    },
    getOneState(stateName) {
        return axios.get('/api/state/' + stateName).then(response => {
            return response.data
        })
    }
}