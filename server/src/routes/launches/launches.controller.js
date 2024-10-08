
const { getAllLaucnhes } = require('../../models/launches.model');
function httpGetAllLaunches(res, res) {
    return res.status(200).json(getAllLaucnhes());
}

module.exports = {
    httpGetAllLaunches
}