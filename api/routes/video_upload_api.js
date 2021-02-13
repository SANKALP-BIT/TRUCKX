const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).json({
        imei: 12345678,
        filename: 'sample.mp4',
        data: 'video_data',
    });
    res.status(500).json({
        message: "invalid request"
    });
});

module.exports = router;