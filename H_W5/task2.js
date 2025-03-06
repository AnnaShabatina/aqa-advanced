const averageGrade = 91;

switch (true) {
  case averageGrade<60:
     console.log("Незадовільно");
    break;
  case 60<=averageGrade && averageGrade<=70:
   console.log("Задовільно");
    break;
    case 71<=averageGrade && averageGrade<=80:
   console.log("Добре");
    break;
    case 81<=averageGrade && averageGrade<=90:
   console.log("Дуже добре");
    break;
  default:
   console.log("Відмінно");
}


