function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) /3;
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B'; 
  } else if (average >= 70) {
    return 'C'; 
  } else if (average >= 60) {
    return 'D'; 
  } else if (average >= 50) {
    return 'F'; 
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"