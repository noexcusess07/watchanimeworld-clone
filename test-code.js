// Dummy code with security issues for testing
const dbPassword = "superSecretPassword123!"; // Hardcoded secret

function calculateSum(a, b) {
    eval("var result = " + a + " + " + b); // Dangerous eval function
    return result;
}

console.log("Password is: " + dbPassword);
