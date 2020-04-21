const { User } = require('../../src/app/models');

describe('Authentication', () => {
  it('should sum two numbers', async () => {
    const user = await User.create({
      name: 'Vinícius Mendite',
      email: 'vinicius.47289@outlook.com',
      password_hash: '1237683764382',
    });

    console.log(user);

    expect(user.email).toBe('vinicius.47289@outlook.com');
  });
});
