let inputAge =prompt("What is Your Birth Year:","Enter year here");
let currentYear = new Date().getFullYear();
let yearValue = currentYear - inputAge;
 if (yearValue <18) {
     console.log("You are a minor");
 }else if (yearValue>18 && yearValue<=36)  {
     console.log("You are  Youth");
 }else console.log("You are an Adult");