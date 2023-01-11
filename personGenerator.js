const personGenerator = {
  surnameJson: `{  
          "count": 15,
          "list": {
              "id_1": "Иванов",
              "id_2": "Смирнов",
              "id_3": "Кузнецов",
              "id_4": "Васильев",
              "id_5": "Петров",
              "id_6": "Михайлов",
              "id_7": "Новиков",
              "id_8": "Федоров",
              "id_9": "Кравцов",
              "id_10": "Николаев",
              "id_11": "Семёнов",
              "id_12": "Славин",
              "id_13": "Степанов",
              "id_14": "Павлов",
              "id_15": "Александров",
              "id_16": "Морозов"
          }
      }`,
  firstNameMaleJson: `{
          "count": 10,
          "list": {     
              "id_1": "Александр",
              "id_2": "Максим",
              "id_3": "Иван",
              "id_4": "Артем",
              "id_5": "Дмитрий",
              "id_6": "Никита",
              "id_7": "Михаил",
              "id_8": "Даниил",
              "id_9": "Егор",
              "id_10": "Андрей"
          }
      }`,
  firstNameFemaleJson: `{
          "count": 10,
          "list": {     
              "id_1": "Александра",
              "id_2": "Мария",
              "id_3": "Инна",
              "id_4": "Арсения",
              "id_5": "Диана",
              "id_6": "Надежда",
              "id_7": "Марина",
              "id_8": "Юлия",
              "id_9": "Елена",
              "id_10": "Алинаы"
          }
      }`,
  GENDER_MALE: "мужчина",
  GENDER_FEMALE: "женщина",

  randomIntNumber: (max = 1, min = 0) =>
    Math.floor(Math.random() * (max - min + 1) + min),

  randomValue: function (json) {
    const obj = JSON.parse(json);
    const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
    return obj.list[prop];
  },

  // Лучше не ссылаться на захардкоженные строки, а на константы
  // Нестрогое сравнение тоже лучше не юзать
  randomFirstName: function () {
    if (this.person.gender === this.GENDER_MALE) {
      return this.randomValue(this.firstNameMaleJson);
    } else {
      return this.randomValue(this.firstNameFemaleJson);
    }
  },

  // Лучше не ссылаться на захардкоженные строки, а на константы
  randomSurname: function () {
    if (this.person.gender === this.GENDER_MALE) {
      return this.randomValue(this.surnameJson);
    } else {
      return `${this.randomValue(this.surnameJson)}а`; // шаблонная строка (оч полезная штука)
    }
  },

  // тернарный оператор
  randomGender: function () {
    return Math.round(Math.random()) ? this.GENDER_FEMALE : this.GENDER_MALE;
  },

  // как-то так, хз какие требования к году в целом (минимальное и максимальные значения)
  randomYear: function () {
    return this.randomIntNumber(Number(new Date().getFullYear()), 1900);
  },

  getPerson: function () {
    this.person = {};
    this.person.gender = this.randomGender();
    this.person.firstName = this.randomFirstName();
    this.person.surname = this.randomSurname();
    this.person.year = this.randomYear();

    console.log(this.person);
    // Вывел в консоль браузера, значения формируются, в дом их можно вставить просто по аналогии с файлом init.js

    return this.person;
  },
};

// Еще в целом рекомендую поставить prettier (если в вс коде работаешь, если нет - какой-нибудь другой форматтер кода)
// Это инструмент для форматирования кода (отступы, переносы строк и всякие другие приколы), оч удобно и код красиво выглядит всегда
