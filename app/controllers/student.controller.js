var students= {
				student1: {
					name: "Jack",
					classs: "12th",
					subject:["Maths","Science"],
					roll_no: 1
				},
				student2: {
					name: "Mary",
					classs: "10th",
					subject:["Maths","SST"],
					roll_no: 2
				},
				student3: {
					name: "Peter",
					classs: "12th",
					subject:["Botany","Zoology"],
					roll_no: 3
				},
				student4: {
					name: "Rajat",
					classs: "11th",
					subject:["Maths","SST"],
					roll_no: 4
				}
				
			
			}
			

exports.create = function(req, res) {
	var newStudent = req.body;
    students["student" + newStudent.roll_no] = newStudent;
	console.log("--->After Post, students:\n" + JSON.stringify(students, null, 4));
    res.end("Post Successfully: \n" + JSON.stringify(newStudent, null, 4));
};

exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(students, null, 4));
    res.end("All Students: \n" + JSON.stringify(students, null, 4));  
};

exports.findOne = function(req, res) {
    var student = students["student" + req.params.roll_no];
    console.log("--->Find student: \n" + JSON.stringify(student, null, 4));
    res.end( "Find a Student:\n" + JSON.stringify(student, null, 4));
};

exports.update = function(req, res) {
	var roll_no = parseInt(req.params.roll_no);
	var updatedStudent = req.body; 
	if(students["student" + roll_no] != null){
		// update data
		students["student" + roll_no] = updatedStudent;

		console.log("--->Updated Successfully, students: \n" + JSON.stringify(students, null, 4))
		
		// return
		res.end("Updated Successfully! \n" + JSON.stringify(updatedStudent, null, 4));
	}else{
		res.end("Don't Exist Student:\n:" + JSON.stringify(updatedStudent, null, 4));
	}
};

exports.delete = function(req, res) {
	var deleteStudent = students["student" + req.params.roll_no];
    delete students["student" + req.params.roll_no];
    console.log("--->After deletion, student list:\n" + JSON.stringify(students, null, 4) );
    res.end( "Deleted student: \n" + JSON.stringify(deleteStudent, null, 4));
};