/*
Problem:
You get several values from an object and then pass them as parameters to a method.
*/

const user= {
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

const formatName = (firstName, lastName) => {
  return firstName + '' + lastName
}

console.log(formatName(user.firstName, user.lastName))
