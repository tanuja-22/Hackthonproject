let students = [];

function addStudent() {
  const name = document.getElementById('name').value;
  const batch = document.getElementById('batch').value;
  const academicPerformance = parseFloat(document.getElementById('academicPerformance').value);

  if (name && batch && !isNaN(academicPerformance) && academicPerformance >= 0 && academicPerformance <= 100) {
    students.push({ name, batch, academicPerformance });
    updateStudentList();
    clearForm();
  } else {
    alert('Please enter valid student information');
  }
}

function updateStudentList() {
  const studentList = document.getElementById('studentList');
  studentList.innerHTML = '<h2>All Students</h2>';
  students.forEach(student => {
    const studentElement = document.createElement('div');
    studentElement.classList.add('student');
    studentElement.textContent = `${student.name} (${student.batch}): ${student.academicPerformance}`;
    studentList.appendChild(studentElement);
  });
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('batch').value = '';
  document.getElementById('academicPerformance').value = '';
}

function recognizeBestStudents() {
  if (students.length === 0) {
    alert('Please add some students first.');
    return;
  }

  const bestStudents = students.reduce((acc, student) => {
    if (!acc[student.batch]) {
      acc[student.batch] = [];
    }
    acc[student.batch].push(student);
    return acc;
  }, {});

  Object.keys(bestStudents).forEach(batch => {
    bestStudents[batch].sort((a, b) => b.academicPerformance - a.academicPerformance);
    bestStudents[batch] = bestStudents[batch].slice(0, 3);
  });

  displayTopStudents(bestStudents);
}

function displayTopStudents(rankings) {
  const topStudentsElement = document.getElementById('bestStudents');
  topStudentsElement.innerHTML = '<h2>Top 3 Students per Batch</h2>';
  
  Object.entries(rankings).forEach(([batch, students]) => {
    const batchElement = document.createElement('div');
    batchElement.innerHTML = `<h3>Batch: ${batch}</h3>`;
    
    students.forEach((student, index) => {
      const studentElement = document.createElement('div');
      studentElement.classList.add('student', 'best-student');
      studentElement.textContent = `${index + 1}. ${student.name}: ${student.academicPerformance}`;
      batchElement.appendChild(studentElement);
    });
    
    topStudentsElement.appendChild(batchElement);
  });
}