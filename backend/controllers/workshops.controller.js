const Workshops = require('../models/workshops.model');

//Return all the workshops
exports.findAll = async (req, res) => {
    try{
        const workshops = await Workshops.find();
        return res.status(200).json(workshops);       
    }catch (err) {
        return res.status(500).send("Internal Server Error");
    }
};

//Return the details of specific workshops
exports.findOne = async (req, res) => {
    try{
        const workshop = await Workshops.find({title: req.params.title});
        if (workshop.length)
            return res.status(200).json(workshop[0]);
        else 
            return res.status(404).json({ error: "Event not found" });
    } catch (err) {
        return res.status(500).json("Internal Server Error");
    }
};