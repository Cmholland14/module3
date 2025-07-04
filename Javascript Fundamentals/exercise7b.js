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
    console.log('Halftime score is ' + this.score);
  },

  fullTime() {
    console.log('Fulltime score is ' + this.score);
  }
};