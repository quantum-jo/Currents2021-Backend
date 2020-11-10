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

//Returns the detail of specific workshops
exports.findOne = async (req, res) => {
    try{
        const workshop = await Workshops.findById(req.params.id);
        if(workshop) res.status(200).json(workshop);
        else res.status(200).json("Workshop not found");       
    }catch (err) {
        res.status(500).send("Internal Server Error");
    }
};