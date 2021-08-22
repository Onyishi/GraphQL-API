// node-graphql/src/database.js

const teachers = [], //TODO

const departments = []; //TODO

const students = [
    {
        id: 1,
        email: 'ada@telexia.com',
        fullName: 'Ada Eze',
        dept: 'Software Engineering',
        enrolled: true,
    },
    {
        id: 2,
        email: 'musa@telexia.com',
        fullName: 'Musa Bashir',
        dept: 'Data Engineering',
        enrolled: true,
    },
    {
        id: 3,
        email: 'ola@telexia.com',
        fullName: 'Omolara Liza',
        dept: 'System Security',
        enrolled: false,
    },
]

module.exports = {
    students,
    teachers,
    departments,
}
