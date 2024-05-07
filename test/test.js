const fPrintMyName = () => {
    const MY_TEXT = 'My name is';
    const MY_NAME = 'Dmitry';
    console.log(MY_TEXT, MY_NAME);
};

const MY_AGE = 24;

setTimeout(fPrintMyName, 500);

const arrListNumbers = [10, 20, 30, 'Man', 'Woman'];

console.log(arrListNumbers);

const copyArrListNumbers = arrListNumbers.map((el) => el * 1.3);

console.log(copyArrListNumbers);

const objMyProperties = {
    propOne: 'Gucci',
    propTwo: 'Gang',
    propThree: null,
};

console.log(objMyProperties);

const copyTwoArrListNumber = arrListNumbers.forEach((el, index) => {
    console.log('arr:', el, 'index:', index);
});

const objUpdateProperties = {
    ...objMyProperties,
    propThree: 'not null',
    propFour: false,
    propFive: true,
};

console.table(objUpdateProperties);

//Destructor objects

const { propFour, propFive } = objUpdateProperties;

console.log(propFour);
console.log(propFive);

//Destructor massives

const [, , kurwa, man, woman] = arrListNumbers;

console.log(kurwa, man, woman);

const resultTernOperator =
    MY_AGE >= 18 ? console.log('I am a man') : console.log('I am a teenager');

class UserProfile {
    constructor() {
        (this.name = 'text'), (this.surname = 'text');
    }

    newNameUserProfile() {
        this.name = 'Zapros name';
    }
}

const firstUser = new UserProfile('New');

console.table(firstUser);

firstUser.newNameUserProfile();

console.table(firstUser);

class UserProfileUpdate extends UserProfile {
    info() {
        return console.log('Good bye!');
    }
}

const secondUser = new UserProfileUpdate();
secondUser.info();
console.table(secondUser);

//Promise - Обещание (запрос) , например , на сервер для получения ответа от него (не мгновенно , а через какое-то время) (отложенное во времени событие)

// const myNewPromise = new Promise((resolve, reject) => {

// })

//Example

// fetch('URL')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error())

//Async function

// const asyncFunction = async () => {
//     await Promise
// }

// asyncFunction()

// const fetchData = async (url) => {
//     try {
//         const responseData = await fetch(url)
//         return responseData
//     } catch (error) {
//         console.log(error)
//     }
// }

// const url = 'url'

// fetchData(url).then(data => {
//     console.log(data)
// })

// Содержимое файла .js помещается в анонимную функцию , ее вывод можно посмотреть

// console.log(arguments.callee.toString());

// console.log(module);

// console.log(__dirname);
// console.log(__filename);

// console.log(exports);
// console.log(module.exports);

// console.log(exports === module.exports);
