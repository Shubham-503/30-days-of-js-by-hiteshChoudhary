let grade,
  score = 20;

switch (true) {
  case score >= 90 && score <= 100:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  case score >= 50:
    grade = "E";
    break;
  case score >= 0 && score < 50:
    grade = "F";
    break;
  default:
    grade = "Invalid score";
}

console.log("grade: ", grade);

const n = 21;
n % 2 ? console.log("odd") : console.log("even");
