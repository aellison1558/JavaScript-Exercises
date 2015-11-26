function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}
Student.prototype.name = function(){
  return (this.fname + " " + this.lname);
}

Student.prototype.enroll = function(course) {
  if (this.courses.indexOf(course) === -1){
    this.courses.push(course);
    course.students.push(this);
    }
}

function Course(name, department, credit_number) {
  this.name = name;
  this.department = department;
  this.credit_number = credit_number;
  this.students = [];
}

Course.prototype.add_student = function(student) {
  student.enroll(this);
}

var student = new Student("andrew", "ellison");
var course = new Course("Ruby", "APP Academy", (18 / 100));
console.log(student.name);
console.log(student.courses);
console.log(course.students);


course.add_student(student);

console.log(student.courses);
console.log(course.students);

course.add_student(student);

console.log(student.courses);
console.log(course.students);
