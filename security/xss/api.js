import axios from 'axios';

const PORT = 'http://localhost:3001/'
const getParameter = function async (keyword) {
    axios({
        url: PORT+'search',
        params: {
            keyword
        },
        method: 'GET'
    }).then((res) => {
        console.log('res', res)
    })
}

export { getParameter }