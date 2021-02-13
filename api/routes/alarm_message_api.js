const express = require('express');
const router = express.Router();


router.post('/:type', (req, res, next) => {
    const type = req.params.type;
    res.status(200).json({
        type: 'ALARM',
        alarm_type: `${type}`,
        alarm_time: '2020-08-18 16:45:35',
        latitude: 32.34567678,
        longitude: -156.456789,
        file_list: ['a.mp4', 'b.mp4']
    });
    res.status(500).json({
        message: "invalid request"
    });
});

module.exports = router;