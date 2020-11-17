const Workshops = require('../model/workshops.model');

//Return all the workshops
exports.findAll = async (req, res) => {
    try{
        const workshops = await Workshops.find();
        res.status(200).json(workshops);       
    }catch (err) {
        res.status(500).send("Internal Server Error");
    }
};

//Return the details of specific workshops
exports.findOne = async (req, res) => {
    try{
        const workshop = await Workshops.find({name: req.params.title});
        if(workshop) 
            res.status(200).json(workshop);
        else 
            res.status(200).json("Workshop not found");       
    }catch (err) {
        res.status(500).json("Internal Server Error");
    }
};