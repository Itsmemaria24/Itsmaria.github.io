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

  // Perform conversions
  hexOutput.textContent = decimalValue.toString(16).toUpperCase();
  binaryOutput.textContent = decimalValue.toString(2);
  octalOutput.textContent = decimalValue.toString(8);
}

// Event Listener for real-time updates
decimalInput.addEventListener('input', updateConversions);
