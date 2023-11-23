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
  
  function isPasswordLengthInputValid(passwordInputLength) {
    if (passwordInputLength < 8) {
        return false;
    }

    if (passwordInputLength > 128) {
        return false;
    }

    if (passwordInputLength >= 8 && passwordInputLength <= 128) {
        return true;
    }

    return false;
}

  // Function to prompt user for password options
  function getPasswordOptions() {
    console.log('Get password options');

    const passwordLength = prompt('How long the password you want to generate (password should be At least 8 characters but no more than 128)?');
    const passwordLengthAsNumber = parseInt(passwordLength, 10);

    if (isPasswordLengthInputValid(passwordLengthAsNumber)) {
        const isLowercaseIncluded = confirm('Do you want to include lowercase characters?');
        const isUppercaseIncluded = confirm('Do you want to include uppercase characters?');
        const isNumericIncluded = confirm('Do you want to include numeric characters?');
        const isSpecialCharsIncluded = confirm('Do you want to include special characters?');

        if (isLowercaseIncluded || isUppercaseIncluded || isNumericIncluded || isSpecialCharsIncluded) {
            return password;
        } else {
            alert('Please choose at least 1 character type');
        }
    } else {
        alert('Please put valid password length, which is a number no less than 8 and no more than 128!');
    }
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
  
  }
  
  // Function to generate password with user input
  function generatePassword() {
      console.log('Generate password');
      let finalPassword; // random password that you will generate
      getPasswordOptions();
  
  
      return finalPassword;
  }
  
  // Write password to the #password input
  function writePassword() {
      // main function to generate the password
      var password = generatePassword();
      var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);