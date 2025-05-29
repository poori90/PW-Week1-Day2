// Classroom Assignment: 4 - Grade Calculation


function checkGrade(score) {
  let grade;
  switch (true) {
    case score >= 90:
      grade = 'A';
      console.log("The Grade is : " + grade + "  for this score");
      break;
    case score >= 80:
      grade = 'B';
      console.log("The Grade is : " + grade + "  for this score");
      break;
    case score >= 70:
      grade = 'C';
      console.log("The Grade is : " + grade + "  for this score");
      break;
    case score >= 60:
      grade = 'D';
      console.log("The Grade is : " + grade + "  for this score");
      break;
    case score >= 0:
      grade = 'F';
      console.log("The Grade is : " + grade + " for this score");
      break;
    default:
      grade = 'Invalid Score';
      console.log("The Grade is : " + grade );
  }
  return grade;
}
checkGrade(60);