const axios = require('axios');

exports.homeRoutes = (req,res)=>{
    // Make get request to api/users
    axios.get('http://localhost:8080/api/users')
        .then(function(response){
            res.render('index',{users: response.data});
        })
        .catch(err => {
            response.send(err);
        })
    
}

// exports.homeRoutes = async (req,res)=>{
//     try{
//         const user = await axios.get('http:localhost:8080/api/users');
//         res.render('index', {users: user});
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).send(error)
//     }
// }



exports.add_user = (req,res)=>{
    res.render('add_user');
}

exports.update_user = (req,res)=>{
    axios.get('http://localhost:8080/api/users', {params: {id: req.query.id}})
        .then(function(userdata){
            res.render('update_user', {user: userdata.data})
        })
        .catch(err => {
            res.send(err);
        })
}