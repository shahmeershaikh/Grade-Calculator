function calculateGrade() {
  let subject1 = parseFloat(document.getElementById("subject1").value) || 0;
  subject2 = parseFloat(document.getElementById("subject2").value) || 0;
  subject3 = parseFloat(document.getElementById("subject3").value) || 0;
  subject4 = parseFloat(document.getElementById("subject4").value) || 0;

  let averageMarks = (subject1 + subject2 + subject3 + subject4) / 4;

  if (!isNaN(averageMarks) && averageMarks >= 0 && averageMarks <= 100) {
    let grade = "";

    if (averageMarks >= 90) {
      grade = "A+";
    } else if (averageMarks >= 80) {
      grade = "A";
    } else if (averageMarks >= 70) {
      grade = "B";
    } else if (averageMarks >= 60) {
      grade = "C";
    } else {
      grade = "D";
    }

    document.getElementById("result").innerHTML =
      "The student's grade is: " + grade;
  } else {
    document.getElementById("result").innerHTML =
      "Invalid input. Marks should be between 0 and 100.";
  }
}
