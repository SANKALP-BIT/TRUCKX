const express = require('express');
const router = express.Router();


router.get('/:type', (req, res, next) => {
    const type = req.params.type;
    res.status(200).json({
        type: 'LOCATION',
        location_time: new Date().getTime(),
        latitude: 32.378903,
        longitude: -122.457324
    });
    res.status(500).json({
        message: "invalid request"
    });
});

module.exports = router;