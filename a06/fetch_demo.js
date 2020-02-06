const fetch = require('node-fetch');
const fs = require('fs');


const url = 'https://reqres.in/api/users';

const getPicByUser = async(user) => {

    let userResponse = await fetch(url + '/' + user);

    let userData = await userResponse.json();

    let picResponse = await fetch(userData.data.avatar);

    const writer = fs.createWriteStream('./avatar.jpg');
    
    picResponse.body.pipe(writer);

}

getPicByUser(1);

//or using promise.then sytax:

fetch(url + '/1')
.then(respone => respone.json())
.then(userData => fetch(userData.data.avatar))
.then(picResponse => {
    const writer = fs.createWriteStream('./avatar.jpg');
    picResponse.body.pipe(writer);
});