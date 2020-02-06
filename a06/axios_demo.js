const axios = require('axios');
const fs = require('fs');
const url = 'https://reqres.in/api/users';

const getPicByUser = async user => {

    try {
        const userResponse = await axios.get(url + '/' + user);

        const picResponse = await axios(
            {
                url: userResponse.data.data.avatar,
                method: 'GET',
                responseType: 'stream'
            }
        );

        const writer = fs.createWriteStream('./avatar.jpg');
        picResponse.data.pipe(writer);

    } catch (error) {
        console.log(error)
    }
}

getPicByUser(1);

//or using promise.then sytax:

axios.get(url + '/1')
    .then(userResponse => axios({
        url: userResponse.data.data.avatar,
        method: 'GET',
        responseType: 'stream'
    }), err => console.log(err))
    .then(picResponse => {
        const writer = fs.createWriteStream('./avatar.jpg');
        picResponse.data.pipe(writer);
    }, err => console.log(err));

