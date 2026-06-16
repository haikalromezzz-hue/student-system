function validateEmail(email) {
  return email.includes("@");
}

function validateUsername(username) {
  return username.trim().length > 0;
}

function validateName(name) {
  return name.trim().length > 0;
}

module.exports = {
  validateEmail,
  validateUsername,
  validateName
};