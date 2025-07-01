//Dice
const dice = [1, 2, 3, 4, 5, 6];

//Function to roll the dice and update the page
function roll() {
  const randomIndex = Math.floor(Math.random() * dice.length);
  const value = dice[randomIndex];
  document.getElementById('dice').textContent = `Rolled: ${value}`;
  return value;
}
