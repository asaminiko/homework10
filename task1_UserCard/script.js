let card = {
  firstName: 'Veronika',
  lastName: 'Chebakova',
  age: 18,
  city: 'Kyiv',
  university: 'KPI',
  showInfo: function () {
    console.log(
      `Hi ${this.firstName} ${this.lastName}! You live in ${this.city}. Your age is ${this.age}. You study at ${this.university}.`
    )
  },
}

let { firstName, lastName } = card
function Hello(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}! How are you?`)
}

card.showInfo()
Hello(firstName, lastName)
