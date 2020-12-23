const Sr = require('../models/sr.model');

exports.findAll = async (req, res) => {
    try {
        const sr = await Sr.find();
        res.status(200).json(sr); 
    } catch (err) {
        console.log(err);
        res.status(500).json("Cannot find sr list");
    }
};

exports.findByName = async (req, res) => {
    try {
        const sr = await Sr.find({ title : req.params.title });
        if (sr.length)
            return res.status(200).json(sr[0]);
        else 
            return res.status(404).json({ error : "SR event  not found" });
    } catch (err) {
        console.log(err);
        return res.status(500).json("Cannot find sr event");
    }
};