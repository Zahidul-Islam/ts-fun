'use strict'

const users = [
  {
    firstName: 'John', lastName: 'Doe', age: 28, gender: 'male'
  },
  {
    firstName: 'Jane', lastName: 'Doe', age: 5, gender: 'female'
  },
  {
    firstName: 'Jim', lastName: 'Carrey', age: 54, gender: 'male'
  },
  {
    firstName: 'Kate', lastName: 'Winslet', age: 40, gender: 'female'
  }
]

const user = users.find(user => user.lastName === 'Doe' && user.gender === 'male')
console.log(user) // -> { firstName: 'John', lastName: 'Doe', age: 28, gender: 'male' }

const underAgeUser = users.find(user => user.age < 18)
console.log(underAgeUser) // -> { firstName: 'Jane', lastName: 'Doe', age: 5, gender: 'female' }
