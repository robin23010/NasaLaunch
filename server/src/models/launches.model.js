const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: "mission",
    rocket: "Explorer IS1",
    launchDate: new Date('December 25, 2030'),
    target: 'Kepler-442 b',
    customer: ['NASA', 'ZTM'],
    upcoming: true,
    success: true,
}

launches.set(launch.flightNumber, launch);

function getAllLaucnhes(){
    return Array.from(launches.values());
}

module.exports = {
    getAllLaucnhes,
    launches
};