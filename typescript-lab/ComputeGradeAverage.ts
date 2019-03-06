// define the array
let grades : number[] = [98, 75, 83, 69];

// loop thru array
let i : number = 0;
let total : number = 0;
let average : number = 0;

for (i=0; i < grades.length; i++) {
    // calculate the total
    total += grades[i];
}

// calculate the average
average = total/grades.length;
console.log("Average mark = " + average);

// log pass (if average over 75) or fail
if (average >= 75) {
  console.log("PASS");
} else {
  console.log("FAIL");
}
