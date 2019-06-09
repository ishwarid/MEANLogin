const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    // console.log("inside fn")
    // console.log("inside fn", req.body.companyName)
    var user = new User();
    user.name = req.body.name;

    user.userName = req.body.userName;
    user.email = req.body.email;
    user.password = req.body.password;
    console.log("user ------------",req.body)
    user.save((err, doc) => {
        console.log("inside save")
        // console.log("res", res)
        if (!err){
            console.log("not error")
            console.log("doc", doc)
            res.send(doc);
        }
           
        else {
            console.log("in ele")
            console.log("error", err.code)
            console.trace("==========", err)
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }
        console.log("done")
    });
}
