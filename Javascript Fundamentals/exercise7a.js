A)
const basketballGame = {
score: 0, 

freeThrow() {
this.score++;
console.log(this.score);
},
basket() {
this.score += 2;
console.log(this.score);
},
threePointer() {
this.score += 3;
console.log(this.score);
},
halfTime() {
console.log('Halftime score is '+this.score);
}
};
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
