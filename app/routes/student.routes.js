module.exports = function(app) {

    var students = require('../controllers/student.controller.js');

    // Create a new Customer
    app.post('/api/students', students.create);

    // Retrieve all Customer
    app.get('/api/students', students.findAll);

    // Retrieve a single Customer by Id
    app.get('/api/students/:roll_no', students.findOne);

    // Update a Customer with Id
    app.put('/api/students/:roll_no', students.update);

    // Delete a Customer with Id
    app.delete('/api/students/:roll_no', students.delete);
}