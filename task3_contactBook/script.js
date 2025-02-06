try {
  let name = checkName(prompt("Введіть ім'я"))
  let phone = checkPhone(prompt('Введіть номер телефону'))
  let email = checkEmail(prompt('Введіть адресу електронної пошти'))

  //контактна книга
  let book = {
    contacts: [
      { name: 'alina', phone: '+380996326789', email: 'lalal@gmail.com' },
      { name: 'nika', phone: '0994375639', email: 'sdf33@gmail.com' },
      { name: 'ann', phone: '0995432799', email: 'sdf33@gmail.com' },
    ],
    //пошук контакту за name
    searchByName: function (a) {
      if (this.contacts.find((i) => i.name === a)) {
        console.log(`Контакт з name ${a} знайдено`)
      } else {
        console.log(`Контакт з name ${a} не знайдено`)
      }
    },
    //створення контакту
    createContact: function (name, phone, email) {
      this.contacts.push({
        name: name,
        phone: phone,
        email: email,
      })
      console.log('Контакт створено')
    },
  }
  book.createContact(name, phone, email)
  book.searchByName('nika')
  console.log(book.contacts)
} catch (error) {
  console.error(`Помилка ${error}`)
} finally {
  console.log('Перевірено')
}

//перевірки
function checkEmail(y) {
  if (y === undefined || y === null) throw new TypeError('Невірний тип даних.') //перевірка на undefined, null
  if (typeof y === 'string' && y.trim() === '') {
    throw new TypeError('Пуста строка.') //перевірка на пусту строку
  }

  return y
}
function checkName(x) {
  if (x === undefined || x === null || x.trim() === '') {
    //перевірка на undefined, null, пусту строку
    return false
  } else if (typeof x === 'string' && /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]+$/.test(x)) {
    //перевірка на символи
    return x
  } else {
    return false
  }
}
function checkPhone(x) {
  if (x === undefined || x === null || x.trim() === '') {
    //перевірка на undefined, null, пусту строку
    return false
  } else if (typeof x === 'string' && /^\+?[0-9]{10,13}$/.test(x)) {
    //перевірка на символи
    return x
  } else {
    return false
  }
}
