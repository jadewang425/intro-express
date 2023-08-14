// data/todo-db.js

const students = [
    {student: 'Jade', project: 'An Animal Memory Game'},
    {student: 'Kate', project: 'Concentration - Doggy Style'},
    {student: 'Dani', project: 'Star Sign Shuffle'},
    {student: 'Cooper', project: 'Morpheus Melee'}
  ];

module.exports = {
getAll: function() {
    return students;
}
};