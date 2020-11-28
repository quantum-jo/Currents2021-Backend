const Cca = require('../models/cca.model');

exports.apply = async (req, res) => {
    try {
        let user = {
            name: req.body.name,
            email: req.body.email,
            dob: req.body.dob,
            college: req.body.college,
            branch: req.body.branch,
            year: req.body.year,
            por: req.body.por,
            mobile: req.body.mobile,
            perma_phone: req.body.perma_phone,
            curr_addr: req.body.curr_addr,
            perm_addr: req.body.perm_addr
        };

        let email = await Cca.find(user.email).limit(1);

        if (email) 
            throw { name: 'UserError', msg: 'Already Exists!'};
        
        await Cca.save(user);
        
        res.status(200).json('Registered!');

    } catch(err) {
        if (err.name == 'UserError')
            res.status(409).json(msg);
        else 
            res.status(400).send("Invalid Details");
    }
};