
const { getAllLaucnhes, addLaunch, existLaunchWithId, abortLauchById } = require('../../models/launches.model');
function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaucnhes());
}

function httpPostAddLaunch(req, res) {
    const launch = req.body;
    launch.launchDate = new Date(launch.launchDate);
    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        console.log(launch);
        return res.status(400).json("missing launch properties")
    }

    if (isNaN(launch.launchDate.valueOf())) {
        return res.status(400).json("invalid Date")
    }

    return res.status(201).json(addLaunch(req.body));
}



function httpAbortLaunch(req, res) {
    const requestId = Number(req.params.id);
    // if not exist
    if (!existLaunchWithId(requestId)) {
        return res.status(400).json({ error: "launch does not found" });
    }

    const aborted = abortLauchById(requestId);
    return res.status(200).json(aborted);

}

module.exports = {
    httpGetAllLaunches,
    httpPostAddLaunch,
    httpAbortLaunch
}