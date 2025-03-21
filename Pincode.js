// Update the regex to allow optional space in the middle and restrict alphabets or special characters at the end
const pincodePattern = /^([0-9]{3}\s?[0-9]{3})$/;
// const pincodePattern = /^[0-9]{6}$/;
// const pincodePattern = /^[0-9]{6}$/;
// const pincodePattern = /^400088$/;

// Testing the regex
const testPincode = "400088";
console.log(pincodePattern.test(testPincode)); // true
