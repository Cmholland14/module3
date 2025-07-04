function truncate (str, maxLength){
if (str.length <=maxLength) {
    return str;
} else {
    return str.slice(0, maxLength) + "...";
}
}


console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...