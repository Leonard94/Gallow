"use strict";

// Get Elements
const alphabet = document.querySelector('.alphabet');
const answerField = document.querySelector('.answer');
const popup = document.getElementById('info-win'); // PopUp
const popupText = document.getElementById('info-win__text'); // PopupText
const popupCategories = document.getElementById('popup-categories'); // Popup Categories
const blockGame = document.getElementById('block-game'); // Затемнение
const btnRestart = document.getElementById('info-restart'); // Restart Btn
const btnCategory = document.getElementById('info-restart-category'); // Choose Category Btn
const pointsVictoryDom = document.getElementById('points-victory'); // Очки побед
const pointsLosingDom = document.getElementById('points-losing'); // Очки поражений
const infoLives = document.querySelector('.info__lives'); // Поле жизней
const infoWelcome = document.getElementById('info-welcome'); // Приветственное сообщение
const infoChosenCategory = document.getElementById('chosen-category'); // Выбранная категория (информация)



// Datas
const ruAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'; // Russian Alphabet


const dataCategories = {
    countries: [
        "австралия", "австрия", "азербайджан", "албания", "алжир", "аргентина", "армения", "багамы", "бахрейн", "беларусь", "бельгия", "болгария", "бразилия", "великобритания", "венгрия", "вьетнам", "гватемала", "германия", "голландия", "гонконг", "греция", "грузия", "дания", "египет", "зимбабве", "израиль", "индия", "индонезия", "иордания", "иран", "ирландия", "исландия", "испания", "италия", "казахстан", "камбоджа", "канада", "катар", "кипр", "киргизия", "китай", "колумбия", "куба", "латвия", "ливан", "литва", "малайзия", "мальта", "марокко", "мексика", "норвегия", "оаэ", "оман", "панама", "перу", "польша", "португалия", "россия", "румыния", "сальвадор", "сербия", "сингапур", "словакия", "словения", "сша", "таиланд", "тайвань", "тунис", "турция", "уганда", "украина", "уругвай", "филиппины", "финляндия", "франция", "хорватия", "черногория", "чехия", "чили", "швейцария", "швеция", "эквадор", "эстония", "юар", "южная", "корея", "ямайка", "япония"
    ],
    food: [
        "абрикос", "ананас", "базилик", "баклажан", "банан", "бергамот", "блин", "бутерброд", "варенье", "ветчина", "виноград", "говядина", "горох", "грейпфрут", "груша", "дыня", "желе", "икра", "инжир", "какао", "капуста", "картофель", "картофель", "каша", "кетчуп", "киви", "коктейль", "колбаса", "конфеты", "котлета", "кофе", "круассан", "курица", "лайм", "лимон", "лук", "майонез", "макароны", "манго", "мандарин", "масло", "молоко", "морковь", "мороженое", "мясо", "овощи", "огурец", "перец", "персик", "петрушка", "печенье", "пирог", "пицца", "помело", "помидор", "редис", "рис", "рыба", "салат", "сахар", "свекла", "свинина", "сельдерей", "слива", "сок", "соль", "соус", "специи", "стейк", "суп", "сыр", "торт", "тыква", "укроп", "фасоль", "фрукты", "хлеб", "хурма", "чай", "чеснок", "чеснок", "шоколад", "щавель", "яблоко", "яйцо"
    ],
    color: [
        "оранжевый", "желтый", "зеленый", "голубой", "синий", "фиолетовый", "розовый", "белый", "серый", "черный", "коричневый"
    ],
    pets: [
        "гусь", "индюк", "коза", "конь", "корова", "кот", "кролик", "курица", "лебедь", "овца", "осел", "петух", "попугай", "свинья", "собака", "хомяк"
    ],
    names: [
        "александр", "александра", "алексей", "алёна", "алина", "алиса", "алла", "альбина", "амелия", "анастасия", "анатолий", "ангелина", "андрей", "анна", "антон", "антонина", "анфиса", "арина", "аркадий", "арсений", "артём", "артур", "богдан", "борис", "вадим", "валентин", "валентина", "валерий", "валерия", "варвара", "василий", "василиса", "вера", "вероника", "виктор", "виктория", "виолетта", "виталий", "виталина", "влада", "владимир", "владислав", "владислава", "всеволод", "вячеслав", "галина", "геннадий", "георгий", "герман", "глеб", "гордей", "григорий", "давид", "даниил", "дарья", "демид", "демьян", "денис", "диана", "дмитрий", "ева", "евгений", "евгения", "егор", "екатерина", "елена", "елизавета", "елисей", "жанна", "захар", "злата", "иван", "игнат", "игорь", "илья", "инна", "ирина", "камилла", "карина", "каролина", "кира", "кирилл", "клим", "константин", "кристина", "ксения", "лада", "лариса", "лев", "леонид", "лидия", "лилия", "любовь", "людмила", "майя", "макар", "максим", "марат", "маргарита", "марианна", "марина", "мария", "марк", "матвей", "милена", "мирон", "мирослав", "мирослава", "михаил", "надежда", "назар", "наталья", "нелли", "ника", "никита", "николай", "нина", "оксана", "олег", "олеся", "ольга", "павел", "пётр", "полина", "прохор", "родион", "роман", "ростислав", "руслан", "светлана", "святослав", "семён", "серафим", "серафима", "сергей", "софия", "станислав", "степан", "таисия", "тамара", "тарас", "татьяна", "тимофей", "тихон", "трофим", "ульяна", "фёдор", "филипп", "эвелина", "элеонора", "элина", "эльвира", "эмилия", "юлия", "юрий", "яна", "яромир", "ярослав", "ярослава"
    ],
}


// Variables
let guessWord; // Загаданное слово
let counterToWin; // Отгаданных букв до победы
let counterLives = 5; // Счётчик жизней
let lives; // Boolean жизней
let pointsVictory = 0; // Кол-во побед
let pointsLosing = 0; // Кол-во поражений
let random; // Рандомное число
let category; // Категория
let dataWords = dataCategories.food; // Выбранное слово

// Автоматизируем добавление букв алфавита в отдельные значения нового массива
const letterArray = ruAlphabet.split('');

// Category
const listCategoryWelcome = document.querySelectorAll('.welcome__category'); // Категории в приветствии
const listCategoryRound = document.querySelectorAll('.popup__category'); // Категории между раундами


// Вешаем обработчик на категории в приветствии
for (let i = 0; i < listCategoryWelcome.length; i++) {
    listCategoryWelcome[i].addEventListener('click', chooseCategory);
}
// Вешаем обработчик на категории между раундами
for (let i = 0; i < listCategoryRound.length; i++) {
    listCategoryRound[i].addEventListener('click', chooseCategory);
}


// ? Temporarily




//* --------------------------------- START Code -----------------------------//


// Генерируем Алфавит
function generateAlphabet() {
    for (let i = 0; i < letterArray.length; i++) {
        // Create HTML
        let letterDiv = document.createElement('div');
        letterDiv.classList.add('letter');
        alphabet.appendChild(letterDiv);
        letterDiv.innerHTML = letterArray[i];
    }
}
generateAlphabet();

// Получаем все буквы
const letter = document.querySelectorAll('.letter');


// Старт игры
function startGame() {
    heartGenerate(counterLives); // Генерируем кол-во жизней
    randomInt(); // Рандомное число
    getWord(random); // Загадываем слово
    insertFiled(); // Генерируем поля для ответа

    // Обработчик нажатия на букву
    for (let i = 0; i < letter.length; i++) {
        letter[i].addEventListener('click', clickLetter);
    }
    function clickLetter(event) {
        // Проверяем была ли уже нажата буква по классу
        if (event.target.classList.contains('letter-pressed')) {
        } else {
            event.target.classList.add('letter-pressed') // Добавляем класс для нажатой буквы
            check(event); // Проверяем совпадение

            if (lives === false) { // Если нет совпадения
                minusLive(); // Отнимаем жизнь
                if (counterLives <= 0) { // Если жизней не осталось - GameOver
                    popup.style.display = 'flex';
                    blockGame.style.display = 'block';
                    popupText.textContent = 'Вы проиграли :('
                    // Записываем +1 в кол-во поражений
                    pointsLosing += 1;
                    pointsLosingDom.textContent = pointsLosing;
                }
            }
        }
    }
}

// Обнуляем стили букв
function defaultStyle() {
    for (let i = 0; i < letter.length; i++) {
        letter[i].classList.remove('letter-pressed')
    }
}

// Выбираем категорию
function chooseCategory(e) {
    // По нажатию категории сменяется категория и регенирируется поле для букв
    switch (e.target.textContent) {

        case 'Страны':
            infoChosenCategory.textContent = 'Страны';
            dataWords = dataCategories.countries;
            restart();
            infoWelcome.style.display = 'none'; // Убираем приветственное сообщение
            popupCategories.style.display = 'none'; // Убираем категории между раундами
            break;

        case 'Еда':
            infoChosenCategory.textContent = 'Еда';
            dataWords = dataCategories.food;
            infoWelcome.style.display = 'none';
            restart();
            infoWelcome.style.display = 'none'; // Убираем приветственное сообщение
            popupCategories.style.display = 'none'; // Убираем категории между раундами
            break;

        case 'Цвета':
            infoChosenCategory.textContent = 'Цвета';
            dataWords = dataCategories.color;
            infoWelcome.style.display = 'none';
            answerField.innerHTML = '';
            restart();
            infoWelcome.style.display = 'none'; // Убираем приветственное сообщение
            popupCategories.style.display = 'none'; // Убираем категории между раундами
            break;

        case 'Домашние животные':
            infoChosenCategory.textContent = 'Домашние животные';
            dataWords = dataCategories.pets;
            infoWelcome.style.display = 'none';
            answerField.innerHTML = '';
            restart();
            infoWelcome.style.display = 'none'; // Убираем приветственное сообщение
            popupCategories.style.display = 'none'; // Убираем категории между раундами
            break;

        case 'Имена':
            infoChosenCategory.textContent = 'Имена';
            dataWords = dataCategories.names;
            infoWelcome.style.display = 'none';
            answerField.innerHTML = '';
            restart();
            infoWelcome.style.display = 'none'; // Убираем приветственное сообщение
            popupCategories.style.display = 'none'; // Убираем категории между раундами
            break;

        default:
            alert('Ничего не выбрано');
    }
}

// Рандомное число
function randomInt() {
    random = Math.floor(Math.random() * Math.floor(dataWords.length));
}

// Загадываем слово из массива на основании рандомного индекса, где максимум - длина массива слов
function getWord(random) {
    guessWord = dataWords[random]; // Выбираем слово
    guessWord = guessWord.split(''); // Разбиваем на массив подстрок
    console.log(`Загаданное слово - ${guessWord}`);
    counterToWin = guessWord.length; // Длина слова
    return guessWord
}

// Генерируем поля для ответа взависимости от длины загаданного слова
function insertFiled() {
    for (let i = 0; i < guessWord.length; i++) {
        let cell = document.createElement('div'); // Создаём новый див
        cell.classList.add('answer__cell'); // Добавляем ему класс
        answerField.appendChild(cell); // Вставляем в родителя
    }
}

// Проверка на совпадение
function check(event) {
    lives = false;
    for (let i = 0; i < guessWord.length; i++) {
        if (event.target.textContent == guessWord[i]) {
            let cellArray = document.querySelectorAll('.answer__cell'); // Получаем массив ячеек для букв
            cellArray[i].textContent = event.target.textContent;
            counterToWin -= 1; // От общего числа букв отнимаем 1
            lives = true; // Если true, то жизнь сохранится

            // Проверяем не открылись ли все буквы (длина слова = кол-во отгаданных букв)
            if (counterToWin <= 0) {
                popup.style.display = 'flex';
                blockGame.style.display = 'block';
                popupText.textContent = 'Вы победили!'
                // Записываем +1 в кол-во выигрышей
                pointsVictory += 1;
                pointsVictoryDom.textContent = pointsVictory;
                // Удаляем отгаданное число из массива
                dataWords.splice(random, 1)
            }
        }
    }
}

// Restart Game
function restart() {
    // Убираем стили у букв
    defaultStyle();
    // Убираем всплывающие окна
    popup.style.display = 'none';
    blockGame.style.display = 'none';
    counterLives = 5;
    answerField.innerHTML = '';
    removeHearts(); // Удаляем сердечки
    startGame();
}

// Кнопка "начать игру заново"
btnRestart.onclick = function () {
    restart();
};
// Кнопка выбора категории
btnCategory.onclick = function () {
    popupCategories.style.display = 'block';
    popup.style.display = 'none';

};


startGame();

//* --------------------------------- END Code -----------------------------//




// Генерируем кол-во сердец = кол-во жизней
function heartGenerate(counterLives) {
    for (let i = 0; i < counterLives; i++) {
        let heartFull = new Image();
        heartFull.src = 'img/heart-full.svg';
        heartFull.classList.add('info-heart')
        infoLives.appendChild(heartFull);
    }
};

// Отнимаем жизнь
function minusLive() {
    counterLives -= 1;
    const rowPoints = document.querySelectorAll('.info-heart'); // Находим все целые сердца

    for (let i = 0; i < rowPoints.length; i++) {
        if (i == (rowPoints.length - 1)) { // Убираем lastchild сердце
            rowPoints[i].classList.remove('info-heart');
            rowPoints[i].src = 'img/heart.svg'
        }
    }
}

// Удаляем все сердца
function removeHearts() {
    while (infoLives.firstChild) {
        infoLives.removeChild(infoLives.firstChild);
    }
}








//? find не подходит --- возвращает первое совпадение
//? indexof не подходит --- возвращает первое совпадение
//? Перебором? --- говнокод? Если есть совпадение между нажатой и загаданным, то перебором получаем все индексы совпадений по значениям
//? Что если нажатые буквы заносить в массив? И методом проверяем совпадения


//todo Future 
//todo Писать сколько осталось слов отгадать в этой категории
//todo Возможность менять категорию во время игры
//todo Рисование виселицы на canvas если ошибки
//todo Возможность обнулить весь прогресс (удалить из local storage очки, отгаданные слова и тд)
//todo Подключить слова через внешний файл
//todo Возможность писать с клавиатуры?


// Done
// Выбранная категория обозначается
// Отгаданное слово удаляется из массива до перезагрузки страницы
// Выбирать категорию можно только между раундами или в начале
// Категории: имена, страны, другое
// Приветственное сообщение с выбором категории
// Функция рестарт не через "одно место", а обнуление всего!
// Добавить жизни (сердечки)
// Счётчик побед и поражений
// Была ли нажата буква сделать иначе
// Добавить счёт, который появляется после первого раунда?
// Еще раз загадывается слово, очищается поле ввода, жизни возвращаются, а счётчик заполнения буквами обнуляется
// Загадывается рандомное слово
// Вы победили! Начать игру заново - кнопка
// Убрать возможность нажимать на class alphabet

