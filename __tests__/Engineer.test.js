const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Jared', '1', 'jared@example.com', 'jarhead');

test('creates an engineer object', () => {
    expect(engineer.name).toBe('Jared');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('jared@example.com');
    expect(engineer.github).toBe('jarhead');
});

test("gets engineer's github username as an object", () => {
    expect(engineer.getGithub()).toBe('jarhead');
});

test('gets employee role as an object', () => {
    expect(engineer.getRole()).toBe('Engineer');
});