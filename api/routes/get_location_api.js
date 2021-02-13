const express = require('express');
const router = express.Router();
const NodeGeocoder = require('node-geocoder');
const geocoder = NodeGeocoder(options);

router.get('/:location', (req, res, next) => {
    const location = req.params.location;
    const resLocation = await geocoder.geocode(`${location}`);
    resLocation.latitude
    res.status(200).json({
        type: 'LOCATION',
        location_time: new Date().getTime(),
        latitude: resLocation.latitude,
        longitude: resLocation.longitude,
    });
    res.status(500).json({
        message: "invalid request"
    });
});

module.exports = router;