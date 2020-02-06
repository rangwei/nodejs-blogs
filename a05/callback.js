
const getUser = (id, callback) => {
    const user = {id, name: 'mockname'};
    callback(user);
};

getUser(123, user => {console.log(user)});