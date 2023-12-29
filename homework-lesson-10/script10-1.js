function Student(firstName, lastName, yearOfBirth) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.courses = [];
  this.grades = {};
  this.attendances = {};
}

Student.prototype.addCourse = function (course) {
  if (!this.courses.includes(course)) {
    this.courses.push(course);
    this.grades[course.name] = [];
    this.attendances[course.name] = [];
  } else {
    console.error("Student already enrolled in this course.");
  }
};

Student.prototype.deleteCourse = function (course) {
  const courseIndex = this.courses.indexOf(course);
  if (courseIndex !== -1) {
    this.courses.splice(courseIndex, 1);
    delete this.grades[course.name];
    delete this.attendances[course.name];
  } else {
    console.error("Student not enrolled in this course.");
  }
};

Student.prototype.addGrade = function (course, grade) {
  this.grades[course.name].push(grade);
};

Student.prototype.addAttendance = function (course, attendance) {
  this.attendances[course.name].push(attendance);
};

Student.prototype.getAverageGrade = function (course) {
  const grades = this.grades[course.name];
  const classes = course.classes;
  if (grades.length === 0) {
    return "No grades yet.";
  }
  return (grades.reduce((sum, grade) => sum + grade, 0) / classes).toFixed(1);
};

Student.prototype.getAverageAttendance = function (course) {
  const attendances = this.attendances[course.name];
  const classes = course.classes;
  if (attendances.length === 0) {
    return "No attendance records yet.";
  }
  return (attendances.length / classes).toFixed(1);
};

Student.prototype.getNumberOfClasses = function (course) {
  return this.grades[course.name].length;
};

Student.prototype.changeCourse = function (oldCourse, newCourse) {
  this.deleteCourse(oldCourse);
  this.addCourse(newCourse);
};

Student.prototype.getAllInfo = function () {
  const enrolledCourses = this.courses.map((course) => course.name).join(", ");

  let info =
    `Student Name: ${this.firstName} ${this.lastName}\n` +
    `Year of Birth: ${this.yearOfBirth}\n` +
    `Enrolled Courses: ${enrolledCourses}\n`;

  for (const course of this.courses) {
    info += `\n--- Course: ${course.name} ---\n`;
    info += `Grades: ${
      this.grades[course.name]?.join(", ") || "No grades yet."
    }\n`;
    info += `Attendances: ${
      this.attendances[course.name]?.length || "No attendance records yet."
    }\n`;
    info += `Average Grade: ${
      this.grades[course.name]?.length > 0
        ? this.getAverageGrade(course)
        : "No grades yet."
    }\n`;
    info += `Average Attendance: ${
      this.attendances[course.name]?.length > 0
        ? this.getAverageAttendance(course)
        : "No attendance records yet."
    }\n`;
    info += `Number of Classes Taken: ${
      this.grades[course.name]?.length || 0
    }\n`;
  }

  return info;
};

const pythonCourse = { name: "Python", classes: 3 };
const javascriptCourse = { name: "Javascript", classes: 5 };

// const student = new Student("Kate", "Lauren", 26);
// student.addCourse(pythonCourse);
// student.addGrade(pythonCourse, 100);
// student.addAttendance(pythonCourse, 1);
// student.addGrade(pythonCourse, 91);
// student.addGrade(pythonCourse, 97);
// student.addAttendance(pythonCourse, 1);
// console.log(student.getAllInfo());
// student.changeCourse(pythonCourse, javascriptCourse);
// student.addGrade(javascriptCourse, 98);
// student.addAttendance(javascriptCourse, 1);
// student.addGrade(javascriptCourse, 100);
// student.addAttendance(javascriptCourse, 1);
// student.addGrade(javascriptCourse, 95);
// student.addGrade(javascriptCourse, 100);
// student.addGrade(javascriptCourse, 94);
// student.addAttendance(javascriptCourse, 1);
// console.log(student.getAllInfo());
// student.addCourse(pythonCourse);
// student.addGrade(pythonCourse, 100);
// student.addAttendance(pythonCourse, 1);
// student.addGrade(pythonCourse, 91);
// student.addGrade(pythonCourse, 97);
// student.addAttendance(pythonCourse, 1);
// console.log(student.getAllInfo());
// student.deleteCourse(pythonCourse);
// console.log(student.getAllInfo());

// const student0 = new Student("Kate", "Lauren", 26);
// const student1 = new Student("Michael", "Mars", 26);
// const student2 = new Student("Sasha", "Green", 26);
// const student3 = new Student("Alex", "Kot", 26);

// student0.addCourse(javascriptCourse);
// student0.addGrade(javascriptCourse, 95);
// student0.addGrade(javascriptCourse, 98);
// student0.addGrade(javascriptCourse, 92);
// student0.addGrade(javascriptCourse, 91);
// student0.addGrade(javascriptCourse, 100);
// student0.getAverageGrade(javascriptCourse);

// student2.addCourse(javascriptCourse);
// student2.addGrade(javascriptCourse, 97);
// student2.addGrade(javascriptCourse, 94);
// student2.addGrade(javascriptCourse, 93);
// student2.addGrade(javascriptCourse, 91);
// student2.addGrade(javascriptCourse, 90);
// student2.getAverageGrade(javascriptCourse);

// student1.addCourse(javascriptCourse);
// student1.addGrade(javascriptCourse, 89);
// student1.addGrade(javascriptCourse, 91);
// student1.addGrade(javascriptCourse, 86);
// student1.addGrade(javascriptCourse, 92);
// student1.addGrade(javascriptCourse, 90);
// student1.getAverageGrade(javascriptCourse);

function Group(course) {
  this.course = course;
  this.listOfStudents = [];
}

Group.prototype.addStudent = function (student) {
  if (!this.listOfStudents.includes(student)) {
    const newListOfStudents = [...this.listOfStudents, student];
    this.listOfStudents = newListOfStudents;
    console.log(
      `Student ${student.firstName} ${student.lastName} added to the group.`
    );
  } else {
    console.error("Student already enrolled in this course.");
  }
};

Group.prototype.deleteStudent = function (student) {
  const newListOfStudents = this.listOfStudents.filter(
    (existingStudent) => existingStudent !== student
  );

  if (newListOfStudents.length !== this.listOfStudents.length) {
    this.listOfStudents = newListOfStudents;
    console.log(
      `Student ${student.firstName} ${student.lastName} removed from the group.`
    );
  } else {
    console.error(
      `Student ${student.firstName} ${student.lastName} not found in the group.`
    );
  }
};

Group.prototype.getStudentRatingByGrade = function () {
  const course = this.course;
  const ratedStudents = this.listOfStudents.map((student) => {
    const averageGrade = student.getAverageGrade(course);
    return { ...student, averageGrade };
  });

  ratedStudents.sort(
    (studentA, studentB) => studentB.averageGrade - studentA.averageGrade
  );

  return ratedStudents.map((student) => {
    return `Student ${student.firstName} ${student.lastName} rating: ${student.averageGrade}.`;
  });
};

Group.prototype.getStudentRatingByAttendance = function () {
  const course = this.course;
  const ratedStudents = this.listOfStudents.map((student) => {
    const averageAttendance = student.getAverageAttendance(course);
    return { ...student, averageAttendance };
  });

  ratedStudents.sort(
    (studentA, studentB) =>
      studentB.averageAttendance - studentA.averageAttendance
  );

  return ratedStudents.map((student) => {
    return `Student ${student.firstName} ${student.lastName} rating: ${student.averageAttendance}.`;
  });
};

// const javascriptGroup = new Group(javascriptCourse);
// javascriptGroup.addStudent(student0);
// javascriptGroup.addStudent(student1);
// javascriptGroup.addStudent(student0);
// javascriptGroup.addStudent(student2);
// javascriptGroup.addStudent(student3);
// javascriptGroup.deleteStudent(student3);
// console.log(javascriptGroup.listOfStudents);

// const groupRating = javascriptGroup.getStudentRatingByGrade();
// console.log(groupRating);
