const http = require('http');
const app = require('./app');



const {loadPlanets} = require('./models/planets.model');
const PORT = process.env.port || 8000;
const server =  http.createServer(app);

async function startServer(){
    await loadPlanets();

    server.listen(PORT, ()=>console.log('app listeining on ', PORT))
};

startServer();

