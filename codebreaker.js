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
