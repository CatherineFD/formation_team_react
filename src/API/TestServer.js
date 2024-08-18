import axios from "axios";

export let backendUrl ='http://localhost:9090';

const axiosApi = axios.create({
    baseURL: backendUrl , headers: {'Content-Type': 'application/json'}
})


export default class TestServer {
    // static async getQuestionTest(idPosition, email, password) {
    //     return axiosApi.get('user/test-competence?positionId=' + idPosition, {
    //         auth: {
    //             username: email, password: password
    //         }
    //     })
    // }
    static async saveResultTestCompetence(result, email, password) {
        const idPosition = 1;
        return axiosApi.post('test-competence/save-results?positionId=' + idPosition, result, {
            auth: {
                username: email,
                password: password
            },
        })
    }
}