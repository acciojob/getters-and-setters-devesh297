//complete this code
class Person {
	constructor(name,age){
       this._name=name;
	   this._age=age;
	}

	get name(){
		return this._name;
	}
	set age(newAge) {
    if (typeof newAge === "number" && newAge > 0) {
      this._age = newAge;
    } else {
      console.error("Invalid age!");
    }
  }

	get age(){
		return this._age;
	}}
 study(){
 console.log(`${this.name} is studying`);  
 }
  teach(){
   console.log(`${this.name} is teaching`);
  }}

class Student extends Person {}

class Teacher extends Person {}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
