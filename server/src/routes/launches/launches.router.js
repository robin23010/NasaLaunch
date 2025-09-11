const express = require('express');
const { httpGetAllLaunches, httpPostAddLaunch } = require('./launches.controller');

const launchRouter = express.Router();

launchRouter.get('/', httpGetAllLaunches);

launchRouter.post('/', httpPostAddLaunch)

module.exports = launchRouter;