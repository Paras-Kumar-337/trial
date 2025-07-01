//Dice
const dice = [1, 2, 3, 4, 5, 6];

//Function to roll the dice
function roll() {
  const randomIndex = Math.floor(Math.random() * dice.length);
  const value = dice[randomIndex];
  return value;
}

// Print the rolled number in the document
document.body.insertAdjacentHTML('beforeend', `<p>Rolled: ${roll()}</p>`);
