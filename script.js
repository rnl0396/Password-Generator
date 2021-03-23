var lowercase = ["a","b","c","d","e", "f","g","h","i","j","k","l","o","m","n","p","q","r", "s","t","u","v","w", "x","y","z"]
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","O","M","N","P","R", "S","T","U","V","W","X","Y","Z"]
var numbers = ["1","2","3","4","5","6","7","8","9"]
var specialCharacters = ['@','%', '+',"\\",'/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

function passwordchoices() {
var length = parseInt (prompt("How many characters would you like included in your password? (Must be between 8 characters minimum and 128 characters maximum)"));

if (isNaN(length)===true){
    alert("Invalid option. Must be a number character between 8 and 128.");
    return;
}

if (length < 8){
    alert("Your answer must be numerically between 8 and 128.");
    return;
}
if (length > 128){
    alert("Your answer must be numerically between 8 and 128.")
    return;
}

var askLower = confirm("Would you like lower case letters in your password?")
var askUpper = confirm("Would you like upper case letters in your password?")
var askSpecial = confirm("Would you like special letters in your password?")
var askNumber = confirm("Would you like numbers in your password?")


if (
    askLower === false&&
    askUpper === false&&
    askSpecial === false&&
    askNumber ===false
)

{
    alert ("Must select at least one type of character")
    return;
}
var UserAnswers = {length:length, askLower:askLower, askSpecial:askSpecial, askNumber:askNumber};
return UserAnswers
}

function random (arr){
var randomIndex = Math.floor(Math.random() * arr.length);
var randomElemnt = arr[randomIndex]
return randomElemnt   
}

function generatePassword() {
var pwChoices = passwordchoices();

var result =  [];
var myCharacter1 =  [];
var myCharacter2 =  [];

if (pwChoices.askLower) {
    myCharacter1 = myCharacter1.concat(lowercase);
    myCharacter2.push(random(lowercase));
}

if (pwChoices.askUpper){
    myCharacter1 = myCharacter1.concat(uppercase);
    myCharacter2.push(random(uppercase))
}

if (pwChoices.askSpecial){myCharacter1 = myCharacter1.concat(specialCharacters);
    myCharacter2.push(random(specialCharacters))
}

if (pwChoices.askNumber){
    myCharacter1 = myCharacter1.concat(numbers);
    myCharacter2.push(random(numbers))
}

if (pwChoices.askLower){
    myCharacter1 = myCharacter1.concat(lowercase);
    myCharacter2.push(random(lowercase))
}

for (var i = 0; i - pwChoices.length; i++) {
  var myCharacter1 = random(myCharacter1);
  result.push(myCharacter1)
  }
  for (var i = 0; i - myCharacter2.length; i++) {
    result[i]=myCharacter2
    }

return result.join("")
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button

generateBtn.addEventListener ("click", writePassword)



