const request = require('supertest');
const app = require('../../app');

describe('Launches API', () => {
  describe('GET /launches', () => {
    it('should respond with 200 success and json', async () => {
      await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });

  describe('POST /launches', () => {
    const validLaunchData = {
      mission: 'USS Enterprise',
      rocket: 'NCC 1701-D',
      target: 'Kepler-442 b',
      launchDate: 'January 4, 2028',
    };

    const launchDataWithoutDate = {
      mission: 'USS Enterprise',
      rocket: 'NCC 1701-D',
      target: 'Kepler-442 b',
    };

    const launchDataWithInvalidDate = {
      mission: 'USS Enterprise',
      rocket: 'NCC 1701-D',
      target: 'Kepler-442 b',
      launchDate: 'not-a-date',
    };

    it('should respond with 201 created for valid launch', async () => {
      await request(app)
        .post('/launches')
        .send(validLaunchData)
        .expect('Content-Type', /json/)
        .expect(201);
    });

    it('should respond with 400 bad request for missing date', async () => {
      await request(app)
        .post('/launches')
        .send(launchDataWithoutDate)
        .expect('Content-Type', /json/)
        .expect(400);
    });

    it('should respond with 400 bad request for invalid date', async () => {
      await request(app)
        .post('/launches')
        .send(launchDataWithInvalidDate)
        .expect('Content-Type', /json/)
        .expect(400);
    });
  });
});
