const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// print total number of minutes
const minutesPassedToday = today.getHours()*60 + today.getMinutes(); // 5-7-2025 15:16:50 PM
console.log(minutesPassedToday + " minutes have passed so far today");

// print total number of seconds
const secondsPassedToday = minutesPassedToday*60 + today.getUTCMilliseconds(); // 5-7-2025 15:16:50 PM
console.log(secondsPassedToday + " seconds have passed so far today")

//Calculate and print your age as: "I am x years, y months and z days old"
/*Today: 05-07-2025, DOB: 05-07-1990 - 35 years
Today: 05-07-2025, DOB: 12-10-1990 - 34 years, 8 months, 34 days */

const dob = new Date("12-10-1990")
let years = today.getFullYear() - dob.getFullYear();
let months = today.getMonth() - dob.getMonth();
let days = today.getDate() - dob.getDate(); 

console.log(`${years}, ${months}, ${days}`);

if (days <0) {
    //Borrow days from the previous month
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
}

if (months < 0){
months +=12;
years --;

}

console.log(`I am ${years} years, ${months} months and ${days} days old`);


/*let.ms - today - dob;
console.log(difference in ms: ${ms});
const dt = new Date(ms);
console.log(dt.toLocaleString());
console.log(`I am ${dt.getFullYear() - 1970} years, ${dt.getMonth()} months and ${dt.getDate() - 1} days old`); */