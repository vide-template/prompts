var exec = require('child_process').execSync

function getName () {
  var name

  try {
    name = exec('git config --get user.name')
  } catch (e) {}

  name = name && JSON.stringify(name.toString().trim()).slice(1, -1)
  return (name || '')
}

function getEmail () {
  var email

  try {
    email = exec('git config --get user.email')
  } catch (e) {}

  email = email && (' <' + email.toString().trim() + '>')
  return (email || '')
}

module.exports = {
  getName,
  getEmail
}