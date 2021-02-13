const express = require('express');
const router = express.Router();


router.post('/:type', (req, res, next) => {
    const type = req.params.type;
    res.status(200).json({
        type: `${type}`,
        imei: 12345678,
        command: 'some_command_string',
    });
    res.status(500).json({
        message: "invalid request"
    });
});

router.get('/:type', (req, res, next) => {
    const type = req.params.type;
    res.status(200).json({
        type: `${type}`,
        response: 'OK',
    });
    res.status(500).json({
        message: "invalid request"
    });
});

module.exports = router;
