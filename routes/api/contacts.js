const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator')

const Contact = require("../../model/contact")

// @route POST api/users
// @desc  Register user
// @acess Public
router.post('/', [
    check('email','Please include a valid e mail').isEmail()
],
async (req, res)=> {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

const{email}= req.body;
// const{message}=req.body;


try{
    let contact = await Contact.findOne({email})
if(contact){
    res.status(400).json({errors:[{msg:'email already exists'}]})
}
    contact = new Contact({
    email,
    message
});

await contact.save();




res.send("Email Route");
} catch (err){
console.error(err.message);
res.status(500).send('Server error')
}


})

module.exports = router;