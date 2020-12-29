const Gallery = require('../models/gallery.model');

exports.findAll = async (req, res) => {
    try{
        const photos = await Gallery.find();
        return res.status(200).json(photos);
    } catch (err) {
        return res.status(500).json({ error : "Internal Server Error" });
    }
}