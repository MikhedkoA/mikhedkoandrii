/*1st step*/
let user__lastname = prompt("What's your last name?");
let user__firstname = prompt("What's your first name?");
let user__dob = prompt("What's your date of birth?");


/*age calculation*/
const Current_Year = 2020;
let user__age = Current_Year - user__dob;
console.log(user__age);

/*outputing data*/
let doc = document;
doc.getElementById('user-last-name').innerText = user__lastname;
doc.getElementById('user-first-name').innerText = user__firstname;
doc.getElementById('user-age').innerText = user__age;