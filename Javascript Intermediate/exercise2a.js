function truncate(str, maxLength) {
return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
}

console.log(truncate('This text will be truncated if it is too long', 25))
// This text will be truncat...