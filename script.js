// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(password!==false){
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var password = '';
  var numCharacters, wantLower, wantUpper, wantNumber, 
  wantSpecial, lowerCaseChars, upperCaseChars, numberChars, specialChars, ruleArray;
  
  //this is my logic to prompt and then generate the password
  
  //prompt for length (must be atleast 8 or alert 'error' die)
  numCharacters = prompt("How many characters do you want in your password? (must be a number 8 or more)");

  //the answer should be an integer for javascript
  numCharacters = parseInt(numCharacters);
  
  //I want to check if entry is a valid number
  if(isNaN(numCharacters)){
    alert('Selection must be a number!');
    return false;
  }

  //check if number greater than 8
  if(numCharacters<8){
    alert('must be a number more than 8');
    return false;
  }
 //the above validats the number of characters - (yay <happy dance> move on to other prompts)

  //this prompts for lowercase
  wantLower = prompt("Do you want lowercase? Y/N ")
  wantLower = wantLower.toUpperCase();

  //check for valid lowercase answer
  if(wantLower !== "Y" && wantLower !== "N"){
    alert("Lowercase option must be Y or N");
    return false;
  }

  //this prompts for uppercase answer
  wantUpper = prompt("Do you want uppercase? Y/N ")
  wantUpper = wantUpper.toUpperCase();

  //check for valid uppercase answer
  if(wantUpper !== "Y" && wantUpper !== "N"){
    alert("Uppercase option must be Y or N");
    return false;
  }

  //this prompts for numberic answer
  wantNumber = prompt("Do you want numbers? Y/N ")
  wantNumber = wantNumber.toUpperCase();

  //check for valid uppercase answer
  if(wantNumber !== "Y" && wantNumber !== "N"){
    alert("Number option must be Y or N");
    return false;
  }

  //this prompts for specialcharacter answer
  wantSpecial = prompt("Do you want special characters? Y/N ")
  wantSpecial = wantSpecial.toUpperCase();

  //check for valid uppercase answer
  if(wantSpecial !== "Y" && wantSpecial !== "N"){
    alert("Special Character option must be Y or N");
    return false;
  }

  //check all the above type prompts, and if none were "chosen", alert and kill task
  if(wantLower === "N" && wantUpper === "N" && wantNumber === "N" && wantSpecial === "N"){
    //if these heiffers didn't pick one, i mean, come on!...;-)  alert to choose
    alert('You must pick Y for at least one type!');
    return false;
  }
  //I need to set up my arrays
  //array of lower chars
  lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";

  //array of upper chars  found 'toUpperCase' Method when googling.  Best find...EVER
  upperCaseChars = lowerCaseChars.toUpperCase();

  //array of number chars
  numberChars = "1234567890";

  //array of special chars
  //because double quotes need to be allowed, we need to escape it using the backslash (\).  I could not get this to work wothout figuring this part out.
  specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //build an array of "rule checks"- "What type do i need for this caracter i.e upper, lower, number, etc"
  ruleArray = [];
  if(wantLower === "Y"){
    ruleArray.push("L"); // ruleArray ['L"]  My arrays for L= lower, U= upper, N= number, S= special
  }

  if(wantUpper === "Y"){
    ruleArray.push("U"); 
  }

  if(wantNumber === "Y"){
    ruleArray.push("N");
  }

  if(wantSpecial === "Y"){
    ruleArray.push("S");
  }

  //loop through the number of characters for password
  var ruleCheckPosition = 0;

  for(var passwordCharacterPosition = 0;passwordCharacterPosition <= numCharacters-1;passwordCharacterPosition++){
      //for this character, what kind of type do i need then apply to the password string

      //create rule array which could contain atleast one type ("L,U,N,S") - get the rule
      var ruleToApply = ruleArray[ruleCheckPosition];

      //get the appropriate character based of the rule in rule list
      var newCharacter = ""; // somethign here for later ' ' 

      if(ruleToApply === "L"){
        //gets a lowercase character using a random number between 0 and the lenght of our lowercase string of available characters
        var index = Math.floor(Math.random() * (lowerCaseChars.length-1));
        newCharacter = lowerCaseChars[index];
      }
      else if(ruleToApply === "U"){
        //gets an uppercase character
        var index = Math.floor(Math.random() * (upperCaseChars.length-1));
        newCharacter = upperCaseChars[index];
      }
      else if(ruleToApply === "N"){
        //gets a number character
        var index = Math.floor(Math.random() * (numberChars.length-1));
        newCharacter = numberChars[index];
      }
      else if (ruleToApply === "S"){
        //gets a special character
        var index = Math.floor(Math.random() * (specialChars.length-1));
        console.log("random number for special character is " + index);
        newCharacter = specialChars[index];
      }
      else{
        alert("uh oh - what happened 😃")
        return false;
      }
      //apply new character to password
      password = password + newCharacter;

      //before incrementing the value to get the next rule for the next loop iteration, is this the end of the rule array?
      if(ruleCheckPosition === ruleArray.length-1){
        //"ran out of rules", so go back to the first rule for the next character
        ruleCheckPosition = 0;
      }
      else{
        ruleCheckPosition++;
      }

  } 
  //returns the string
  return password;
}
