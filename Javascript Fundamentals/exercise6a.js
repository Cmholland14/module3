const westley = {
name: 'Westley',
numFingers: 5
}
const rugen = {
name: 'Count Rugen',
numFingers: 6
}
const inigo = {
firstName: 'Inigo',
lastName: 'Smith',
greeting(person) {
let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
console.log(greeting + this.getCatchPhrase(person));
},
getCatchPhrase(person) {
return 'Nice to meet you.';
}
}
inigo.greeting(westley)
inigo.greeting(rugen)
