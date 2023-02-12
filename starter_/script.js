// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  var secondType = confirm("Would you like to add lower case?"); 
  if (secondType) { 
    var thirdType = confirm("Would you like to add upper case?");
    if (thirdType) { 
      var fourthType = confirm("Would you like to add special characters as well?"); 
      if (fourthType) { 
          return 4; 
      }else { 
            return 3; 
        } 
      } else { 
        return 2;
    } 
  } else { 
    return 1; 
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var password = '';
  for (var i = 0; i < 20; i++) {
    var randomElement = getRandom(numericCharacters); 
    password += randomElement;
  }
  return password;
}

function generatePassword2() {
  var password = '';
  var newArray = numericCharacters.concat(lowerCasedCharacters);
  for (var i = 0; i < 20; i++) {
    var randomElement = getRandom(newArray); 
    password += randomElement;
  }
  return password;
}

function generatePassword3() {
  var password = '';
  var newArray = numericCharacters.concat(lowerCasedCharacters);
  var moreTypes = newArray.concat(upperCasedCharacters);
  for (var i = 0; i < 20; i++) {
    var randomElement = getRandom(moreTypes); 
    password += randomElement;
  }
  return password;
}

function generatePassword4() {
  var password = '';
  var newArray = numericCharacters.concat(lowerCasedCharacters);
  var moreTypes = newArray.concat(upperCasedCharacters);
  var allTypes = moreTypes.concat(specialCharacters);
  for (var i = 0; i < 20; i++) {
    var randomElement = getRandom(allTypes); 
    password += randomElement;
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var passwordOption = getPasswordOptions();
  var password;

  if (passwordOption === 1) {
    password = generatePassword();
  } else if (passwordOption === 2) {
    password = generatePassword2();
  } else if (passwordOption === 3) {
    password = generatePassword3();
  } else if (passwordOption === 4) {
    password = generatePassword4();
  }

  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);