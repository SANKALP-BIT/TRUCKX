const express = require('express');
const app = express();

const loginApiRoute = require('./api/routes/login_post_api');
const alarmMessageAPIRoute = require('./api/routes/alarm_message_api');
const getLocationAPIRoute = require('./api/routes/get_location_api');
const videoUploadAPIRoute = require('./api/routes/video_upload_api');
const commandAPIRoute = require('./api/routes/command_api');

app.use('/login', loginApiRoute);
app.use('/alarm', alarmMessageAPIRoute);
app.use('/location', getLocationAPIRoute);
app.use('/uplaod', videoUploadAPIRoute);
app.use('/command', commandAPIRoute);

app.use((req, res, next) => {
    res.status(200).json ({
        message: 'starting api'
    });
    res.status(500).json({
        message: "invalid request"
    });
});

module.exports = app;