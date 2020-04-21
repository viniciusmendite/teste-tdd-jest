const request = require('supertest');

const app = require('../../src/app');
const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('Authentication', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Vinícius Mendite',
      email: 'vinicius.47289@outlook.com',
      password: '1234456',
    });
    const response = await request(app).post('/sessions').send({
      name: user.email,
      password: '123456',
    });
    expect(response.status).toBe(200);
  });
});
