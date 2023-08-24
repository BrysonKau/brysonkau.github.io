function generateMessage() {
    const inputCode = document.getElementById('inputCode').value;
    const crypticMessage = numberStringToLetters(inputCode);
    document.getElementById('outputMessage').textContent = crypticMessage;
}

function numberStringToLetters(numberString) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = numberString.split('-');
    let result = '';
  
    for (const number of numbers) {
      const num = parseInt(number, 10);
  
      if (!isNaN(num) && num >= 1 && num <= 26) {
        result += alphabet[num - 1];
      } else {
        result += number;
      }
    }
  
    return result;
  }

  function generateCode(){
    const inputString = document.getElementById('inputString').value;
    const crypticMessage = convertStringToNumbers(inputString);
    document.getElementById('outputMessage').textContent = crypticMessage;
  }
  
  function convertStringToNumbers(inputString) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowercaseInput = inputString.toLowerCase();
    let result = '';
  
    for (let i = 0; i < lowercaseInput.length; i++) {
      const char = lowercaseInput[i];
      const index = alphabet.indexOf(char);
      
      if (index !== -1) {
        result += (index + 1).toString();
      } else {
        result += char;
      }
  
      if (i !== lowercaseInput.length - 1) {
        result += '-';
      }
    }
  
    return result;
  }

  
