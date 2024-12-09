// Select elements
const decimalInput = document.getElementById('decimalInput');
const hexOutput = document.getElementById('hexOutput');
const binaryOutput = document.getElementById('binaryOutput');
const octalOutput = document.getElementById('octalOutput');

// Function to update conversions
function updateConversions() {
  const decimalValue = parseInt(decimalInput.value, 10);

  // Check if input is a valid number
  if (isNaN(decimalValue)) {
    hexOutput.textContent = '-';
    binaryOutput.textContent = '-';
    octalOutput.textContent = '-';
    return;
  }

  // Perform conversions using arithmetic methods instead of toString
  let hexResult = '';
  let num = decimalValue;
  while (num > 0) {
    const remainder = num % 16;
    hexResult = (remainder < 10 ? remainder : String.fromCharCode(65 + (remainder - 10))) + hexResult;
    num = Math.floor(num / 16);
  }
  hexOutput.textContent = hexResult.toUpperCase() || '0'; // Ensure at least '0' is shown

  // Binary Conversion without toString
  let binaryResult = '';
  num = decimalValue;
  while (num > 0) {
    binaryResult = (num % 2) + binaryResult;
    num = Math.floor(num / 2);
  }
  binaryOutput.textContent = binaryResult || '0'; // Ensure at least '0' is shown

  // Octal Conversion without toString
  let octalResult = '';
  num = decimalValue;
  while (num > 0) {
    octalResult = (num % 8) + octalResult;
    num = Math.floor(num / 8);
  }
  octalOutput.textContent = octalResult || '0'; // Ensure at least '0' is shown
}

// Event Listener for real-time updates
decimalInput.addEventListener('input', updateConversions);
