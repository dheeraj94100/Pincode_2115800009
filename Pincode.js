// Update the regex to restrict alphabets or special characters at the beginning
const pincodePattern = /^[0-9]{6}$/;
// const pincodePattern = /^400088$/;

// Test the regex
const testPincode = "400088";
console.log(pincodePattern.test(testPincode)); // true
