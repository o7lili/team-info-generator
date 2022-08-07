const Employee = require('../lib/Employee.js');
const employee = new Employee('Jared', '1', 'jared@example.com');

test('creates an employee object', () => {
    expect(employee.name).toBe('Jared');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('jared@example.com');
});

test("gets employee's name as an object", () => {
    expect(employee.getName()).toBe('Jared');
});

test("gets employee's ID as an object", () => {
    expect(employee.getId()).toBe('1');
});

test("gets employee's email as an object", () => {  
    expect(employee.getEmail()).toBe('jared@example.com');
});

test("gets employee's role as an object", () => {
    expect(employee.getRole()).toBe('Employee');
})

