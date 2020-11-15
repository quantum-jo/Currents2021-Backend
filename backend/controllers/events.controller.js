const Events = require('../models/events.model');

exports.findAll = async (req, res) => {
    try{
        const events = await Events.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ error : "Internal Server Error" });
    }
}

exports.findByName = async (req, res) => {
    try {
        const events = await Events.find({ name:req.params.name });
        if(events)
        res.status(200).json(events);
        else
        res.status(404).json({ error : "Event  not found" });
        
    } catch (err) {
        res.status(500).json({ error : "Internal Server Error" });
    }
}