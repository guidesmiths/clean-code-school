/*
Solution:
Instead, try passing the whole object.
*/

const user = {
  firstName: "John",
  lastName: "Smith",
  dateOfBirth: 1985,
  spokenLanguages: {
    native: "English",
    fluent: "Spanish",
    intermediate: "Chinese"
  },
  email: "johnsmith@gmail.com"
}

const formatName = (user) => {
  return user.firstName + '' + user.lastName
}

console.log(formatName(user))