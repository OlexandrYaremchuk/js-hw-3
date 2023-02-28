let option = prompt('Який у вас настрій?');
let message;

switch (option){
    case "Щасливий": message=(`😀`); break;
    case "Сумний": message=(`😂`); break;
    case "Злість": message=(`😡`); break
    default: console.log(`Не знаю такого настрою`);
}
console.log(message);