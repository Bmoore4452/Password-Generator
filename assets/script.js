var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["\'", "\"", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "}", "|", "~", "="];
var passwordPool = [];
var newPassword = "";
var numberOfCharacters = "";
var count = 0;

// Prompts the user to enter a number of chracters for their password 

function getNum() {
  numberOfCharacters = prompt("Enter number of characters for password. \nPlease enter number between 8 and 128.");
  if (isNaN(numberOfCharacters)) {
    alert("Input must be a number");
    getNum();
  }
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    alert("Input must be a number between 8 and 128");
    getNum();
  }
  if (numberOfCharacters >= 8 && numberOfCharacters <= 128) {
    return numberOfCharacters
  }
}

function addNum() {
  var useNum = "Do you want numbers?\n Click OK for Yes\n Click Cancel for No"
  if (confirm(useNum)) {
    passwordPool = passwordPool.concat(num)
  } else {
    count += 1;
  }
}

// Asks the user to confirm if they want lowercase letters to be included in the password

function getLow() {
  var lowLetters = "Do you want lowercase letters?\n Click OK for Yes\n Click Cancel for No"
  if (confirm(lowLetters)) {
    passwordPool = passwordPool.concat(lowerCase);
  } else {
    count += 1;
  }
}

// Ask the user to confirm if they want uppercase letters to be included in the password

function getHigh() {
  var upLetters = "Do you want uppercase letters?\n Click OK for Yes\n Click Cancel for No"
  if (confirm(upLetters)) {
    passwordPool = passwordPool.concat(upperCase);
  } else {
    count += 1;
  }
}

// Ask the user to confirm if they want special characters to be included in the password

function getSpec() {
  var specChar = "Do you want special characters?\n Click OK for Yes\n Click Cancel for No"
  if (confirm(specChar)) {
    passwordPool = passwordPool.concat(specialCharacters);
  } else {
    count += 1;
  }
}

// Randomly chooses characters based on the number of charcters and type of characters requested by the user

function randomizeNum() {
  for (var i = 0; i < numberOfCharacters; i++) {
    var random = Math.floor(Math.random() * passwordPool.length)
    newPassword = newPassword.concat(passwordPool[random])
  }
  return newPassword;
}

// The function used to run the other function in sequence to generate password

function generatePassword() {
  newPassword = "";
  count = 0;
  getNum();
  addNum();
  getLow();
  getHigh();
  getSpec();
  if (count < 4) {
    randomizeNum();
  } else {
    alert("Please select at least one condition")
    numberOfCharacters = "";
    passwordPool = [];
    count = 0;
    generatePassword();
  }

  passwordPool = [];
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
