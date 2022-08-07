const Intern = require('../lib/Intern');
const intern = new Intern('Jared', '1', 'jared@example.com', 'Yale');

test('creates an intern object', () => {
    expect(intern.name).toBe('Jared');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('jared@example.com');
    expect(intern.school).toBe('Yale');
});

test("gets intern's school as an object", () => {
    expect(intern.getSchool()).toBe('Yale');
});

test("gets intern's role as an object", () => {
    expect(intern.getRole()).toBe('Intern');
});