const Gallery = require('../models/gallery.model');

exports.findAll = async (req, res) => {
    try{
        const gallery = await Gallery.find();
        return res.status(200).json(gallery);
    } catch (err) {
        return res.status(500).json({ error : "Internal Server Error" });
    }
}