function ucFirstLetters(str) {
  return str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(ucFirstLetters("los angeles") )
console.log(ucFirstLetters("san jose") )
console.log(ucFirstLetters("havelock north") )
console.log(ucFirstLetters("kansas city") )
console.log(ucFirstLetters("colorado springs") )

