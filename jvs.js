
const decimalInput = document.getElementById('decimalInput');
const hexOutput = document.getElementById('hexOutput');
const binaryOutput = document.getElementById('binaryOutput');
const octalOutput = document.getElementById('octalOutput');
function updateConversions() {
  const decimalValue = parseInt(decimalInput.value, 10);

  
  if (isNaN(decimalValue)) {
    hexOutput.textContent = '-';
    binaryOutput.textContent = '-';
    octalOutput.textContent = '-';
    return;
  }

  let hexResult = '';
  let num = decimalValue;
  while (num > 0) {
    const remainder = num % 16;
    hexResult = (remainder < 10 ? remainder : String.fromCharCode(65 + (remainder - 10))) + hexResult;
    num = Math.floor(num / 16);
  }
  hexOutput.textContent = hexResult.toUpperCase() || '0'; 
  let binaryResult = '';
  num = decimalValue;
  while (num > 0) {
    binaryResult = (num % 2) + binaryResult;
    num = Math.floor(num / 2);
  }
  binaryOutput.textContent = binaryResult || '0'; 

  let octalResult = '';
  num = decimalValue;
  while (num > 0) {
    octalResult = (num % 8) + octalResult;
    num = Math.floor(num / 8);
  }
  octalOutput.textContent = octalResult || '0'; 
}
decimalInput.addEventListener('input', updateConversions);
