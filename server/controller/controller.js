var Userdb = require('../model/model');

// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty."});
        return;
    }

    // new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // save user in database
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user')
        })
        .catch(err=> {
            res.status(500).send({
                message: err.message || "An error occurred while creating a create operation."
            });
        });

}

// retrive and return all users/single user
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data=> {
                if(!data){
                    res.status(404).send({message: "User with id " + id + " not found."})
                }else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: "Error "})
            })
    }else{
    Userdb.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({message: err.message || "Error occurred while retrieving user information."})
    })
}
}

// Update user by user id
exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400)
        .send({Message: "Data to update can not be empty."})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,
    {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status
    }, 
    { new:true }
    )
        .then(data => {
            if(!data){
                res.status(404).send({message: `Can not update user with id: ${id}.`})
            }else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message: 'Error updating user information.'})
        })       
}

// Delete user by user id
exports.delete = (req,res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: `Can not delete user with id: ${id}.`})
            }else{
                res.send({
                    message:"User deleted successfully!"
                })
            }
        })
        .catch(err=> {
            res.status(500).send({message: 'Could not delete user with id:' + id})
        })
}