const Team = require('../models/team.model');

//Returns all the core team members. 
exports.findAll = async (req, res) => {
    try {
        const team = await Team.find();
        res.status(200).json(team);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
};

