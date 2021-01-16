const Certificate = require('../models/certificate.model');

let isInt = (value) => !isNaN(value) && (function(x) { return (x | 0) === x })(parseFloat(value)); 
 
exports.authenticate = async (req, res) => {
    try {
        let serialNo = req.query.serialNo;

        if (!isInt(serialNo))
            throw { name: 'InvalidNo' };
        
        let User = await Certificate.find({ serialNo });

        if (!User.length) 
            throw { name: 'MissingUser' };

        return res.status(200).json(User[0]);

    } catch (err) {
        if (err.name == 'InvalidNo') 
            return res.status(400).json("Invalid Serial Number!");

        if (err.name == 'MissingUser') 
            return res.status(409).json("No such User exists");
    }
        
};
