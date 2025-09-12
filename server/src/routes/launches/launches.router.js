const express = require('express');
const { httpGetAllLaunches, httpPostAddLaunch, httpAbortLaunch } = require('./launches.controller');

const launchRouter = express.Router();

launchRouter.get('/', httpGetAllLaunches);

launchRouter.post('/', httpPostAddLaunch)

launchRouter.delete('/:id', httpAbortLaunch)



module.exports = launchRouter;