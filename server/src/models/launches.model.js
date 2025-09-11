const launches = new Map();

let lastLaunchFlightNumber = 100;

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


function addLaunch(launch){
    lastLaunchFlightNumber++;
    console
    launches.set(lastLaunchFlightNumber, Object.assign(launch, {success:true, upcoming:true, flightNumber: lastLaunchFlightNumber, customer: ['NASA', 'ZTM'] }))
}

module.exports = {
    getAllLaucnhes,
    addLaunch
};