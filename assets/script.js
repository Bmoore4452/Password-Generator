// Assignment code here
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["\'", "\"", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "}", "|", "~", "="];
var passwordPool = [];
var newPassword = "";
var numberOfCharacters = "";

function getNum() {
  numberOfCharacters = prompt("Enter number of characters for password. \nPlease enter number between 8 and 128.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    getNum();
  }
  if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
    passwordPool = num;
  }
  return numberOfCharacters
}

function getLow() {
  var lowLetters = "Do you want lowercase letters?\n Click OK for Yes\n Click Cancel for No"
  if (confirm(lowLetters)) {
    passwordPool = passwordPool.concat(lowerCase);
  }
}

function getHigh() {
  var upLetters = "Do you want uppercase letters?\n Click OK for Yes\n Click Cancel for No"
  if (confirm(upLetters)) {
    passwordPool = passwordPool.concat(upperCase);
  }
}

function getSpec() {
  var specChar = "Do you want special characters?\n Click OK for Yes\n Click Cancel for No"
  if (confirm(specChar)) {
    passwordPool = passwordPool.concat(specialCharacters);
  }
}

function randomizeNum() {
  for (var i = 0; i < numberOfCharacters; i++) {
    var random = Math.floor(Math.random() * passwordPool.length)
    newPassword = newPassword.concat(passwordPool[random])
  }
  return newPassword;
}

function generatePassword() {
  newPassword = "";
  getNum();
  getLow();
  getHigh();
  getSpec();
  randomizeNum();

  return newPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
