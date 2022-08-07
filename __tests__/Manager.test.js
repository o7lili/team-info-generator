const Manager = require('../lib/Manager');
const manager = new Manager('Jared', '1', 'jared@example.com', '2177');

test('creates a manager object', () => {
    expect(manager.name).toBe('Jared');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('jared@example.com');
    expect(manager.officeNumber).toBe('2177');
});

test('gets employee role as an object', () => {
    expect(manager.getRole()).toBe('Manager');
})