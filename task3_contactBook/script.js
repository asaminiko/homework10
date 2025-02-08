let name = checkName(prompt("Введіть ім'я").trim())
let phone = checkPhone(prompt('Введіть номер телефону').trim())
let email = checkEmail(prompt('Введіть адресу електронної пошти').trim())

//контактна книга
let book = {
  contacts: [
    { name: 'nika', phone: '+380996326789', email: 'lalal@gmail.com' },
    { name: 'Nikka', phone: '0994375639', email: 'sdf33@gmail.com' },
    { name: 'ann', phone: '09954333799', email: 'sdf43@gmail.com' },
    { name: 'nikA', phone: '0955375639', email: 'sdf63@gmail.com' },
    { name: 'nikoletta', phone: '0996632799', email: 'sd633@gmail.com' },
  ],
  //пошук контакту за name
  searchByName: function (word) {
    console.log(`Пошук контакту з name: ${word}`)
    word = word.toLowerCase()
    let b = this.contacts.filter((j) => {
      let myName = j.name.toLowerCase()
      if (word.substring(1, 3) === myName.substring(1, 3)) {
        return true
      }
    })
    console.log(b)
  },
  //створення контакту
  createContact: function (name, phone, email) {
    this.contacts.push({ name, phone, email })
    console.log(`Створено контакт ${[...arguments]}`)
  },
}
book.createContact(name, phone, email)
book.searchByName('nIkaaa')
console.log(book.contacts)

//перевірки
function checkEmail(input) {
  if (input === undefined || input === null)
    throw new TypeError('Невірний тип даних.') //перевірка на undefined, null
  if (typeof input === 'string' && input.trim() === '') {
    throw new TypeError('Пуста строка.') //перевірка на пусту строку
  }

  return input
}
function checkName(input) {
  if (input === undefined || input === null)
    throw new TypeError('Невірний тип даних.') //перевірка на undefined, null
  if (typeof input === 'string' && input.trim() === '') {
    throw new TypeError('Пуста строка.') //перевірка на пусту строку
  }
  if (
    !(typeof input === 'string' && /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]+$/.test(input))
  ) {
    throw new SyntaxError("Це не ім'я.") //перевірка на символи
  }

  return input
}
function checkPhone(input) {
  if (input === undefined || input === null)
    throw new TypeError('Невірний тип даних.') //перевірка на undefined, null
  if (typeof input === 'string' && input.trim() === '') {
    throw new TypeError('Пуста строка.') //перевірка на пусту строку
  }
  if (!(typeof input === 'string' && /^\+?[0-9]{10,13}$/.test(input))) {
    throw new SyntaxError('Це не номер телефону.') //перевірка на символи
  }
  return input
}
