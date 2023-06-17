"use strict";

const burgerMenu = document.querySelector('.burger');
const nav = document.querySelector('.nav');

function showMenu() {
  burgerMenu.classList.toggle("burger--active");
  nav.classList.toggle("nav--show");
}

burgerMenu.addEventListener("click", showMenu);

nav.addEventListener('click', (e) => {
  if (e.target.closest('.nav__link')) {
    return;
  }

  showMenu();
})

// ................translate...............

const sectionName = {
  en: ["Objective", "Summury", "Skills", "Projects", "Experience", "Code", "Education", "Courses", "Additionally"],
  ru: ["Должность", "О себе", "Навыки", "Проекты", "Опыт", "Код", "Образование", "Курсы", "Дополнительно"],
}

const transContent = {
  en: ["ALEKSANDR ALEHNO",
    "Front-end Developer",
    "When new technologies are released in the field of web development, I strive to study and understand them in full. Communication with the team not only contributes to more productive work, but also simply gives pleasure. The skill of concentrating on the tasks set does not allow me to lose my working rhythm.",
    "There are some projects here:",
    "Sum all the values that don't appear below '0'.",
  ],

  ru: ["АЛЕКСАНДР АЛЕХНО",
    "Front-end Разработчик",
    "При выходе новых технологий в сфере web разработки стремлюсь изучить и разобраться в них в полном объеме. Общение с командой не только способствует более продуктивной работе, но и просто доставляет удовольствие. Навык концентрации на поставленных задачах не позволяет сбить меня  с рабочего ритма.",
    "Некоторые проекты:",
    "Сумма всех значений, которые не отображаются ниже '0'.",
  ],
}

const experience = {
  0: {
    en: ["Training at the IT Academy", "Development of ", "the graduation project.", "The project is a single-page web application. HTML, CSS and JavaScript technologies were used."],
    ru: ["Обучение в IT Academy", "Разработка  ", "учебного проекта.", "Проект представляет собой одностраничное веб-приложение. Примененные технологии: HTML, CSS, JavaScript."],
  },

  1: {
    en: ["Training at the IT Academy", "Development of ", "the graduation project.", "The project is a cross-browser responsive website. HTML, CSS, Gulp, SASS, jQuery, JavaScript, Grid Layout, BEM technologies were used."],
    ru: ["Обучение в IT Academy", "Разработка ", "учебного проекта.", "Проект представляет собой кроссбраузерный адаптивный веб-сайт. Примененные технологии: HTML, CSS, Gulp, SASS, jQuery, JavaScript, БЭМ, Grid Layout."],
  },
}

const education = {
  en: ["State Academy of Communications", "Minsk", "Infocommunication networks"],
  ru: ["Белорусская государственная академия связи", "Минск", "Сети инфокоммуникаций"],
}

const courses = {
  0: {
    en: ["", "JavaScript/Front-end", "", "Certificate of successful completion of the course"],
    ru: ["", "JavaScript/Front-end", "", "Сертификат об успешном завершении курса"],
  },

  1: {
    en: ["Minsk", "Web application development with JavaScript", "Studied: function, array, object, OOP, event, timer, animation, JSON, AJAX, SPA, GIT", "Certificate of successful completion of the course"],
    ru: ["Минск", "Разработка веб-приложений на JavaScript", "Изучил: функции, массивы, объекты, ООП, события, таймеры, анимация, JSON, AJAX, SPA, GIT", "Сертификат об успешном завершении курса"],
  },

  2: {
    en: ["Minsk", "Website development with HTML, CSS, and JavaScript", "Studied: HTML5, CSS3, Sass, Flex, Greed, Animation, form, Adaptive Web Design, media-queries", "Certificate of successful completion of the course"],
    ru: ["Минск", "Разработка веб-сайтов с использованием HTML, CSS и JavaScript", "Изучил: HTML5, CSS3, Sass, Flex, Greed, Анимация, Формы, Адаптивная верстка, Медиа-запросы", "Сертификат об успешном завершении курса"],
  },
}

const additionally = {
  en: ['I am fond of reading books (“You don\'t know JS”, “Expressive JavaScript”, ”Grokking Algorithms”), watching movies and TV shows. I study technical documentation on official websites', 'In my free time, I learn to play the electric guitar, and also attend various concerts and events.'],
  ru: ['Увлекаюсь чтением книг (“Вы не знаете JS”, “Выразительный JavaScript”, ”Грокаем алгоритмы”), просмотр фильмов и сериалов. Техническую документацию изучаю на официальных сайтах', 'В свободное время учусь играть на электрогитаре, а также посещаю различные концерты и мероприятия.'],
}

const langSwitch = document.querySelector('.lang__switch');
const headers = document.querySelectorAll('.section-title');
const navItems = nav.querySelectorAll('.nav__link');

const transItems = document.querySelectorAll(".trans-item")
const workItems = document.querySelectorAll('.work-item');
const educationBlock = document.querySelectorAll('.education__university, .education__city, .education__direction');
const courseItems = document.querySelectorAll('.course-item');
const additionallyBlock = document.querySelectorAll('.additionally-content');

langSwitch.addEventListener('change', () => {
  let lang = langSwitch.value;

  headers.forEach((item, i) => {
    item.textContent = sectionName[lang][i];
    navItems[i].textContent = sectionName[lang][i];
  });

  transItems.forEach((item, i) => item.textContent = transContent[lang][i]);
  educationBlock.forEach((item, i) => item.textContent = education[lang][i]);
  additionallyBlock.forEach((item, i) => item.textContent = additionally[lang][i]);

  workItems.forEach((item, i) => transDiv(item, i, ".work-content", experience, lang));
  courseItems.forEach((item, i) => transDiv(item, i, ".course-content", courses, lang));
})


function transDiv(el, ind, cl, obj, ln) {
  el.querySelectorAll(cl).forEach((item, j) => {
    item.textContent = obj[ind][ln][j];
  })
}