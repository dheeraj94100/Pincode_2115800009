// Update the regex to restrict alphabets or special characters at the end
const pincodePattern = /^[0-9]{6}$/;
// const pincodePattern = /^[0-9]{6}$/;
// const pincodePattern = /^400088$/;

// Testing the regex
const testPincode = "400088";
console.log(pincodePattern.test(testPincode)); // true
