// ---------------------lesson 1 (рисуем прямоугольники)---
// let canvas = document.getElementById("c1"); // получаем canvas из html документа
// let ctx = canvas.getContext('2d'); //применяем метод "2d" (плоский рисунок) к переменной canvas и присваеваем все это переменной ctx
// ctx.fillStyle = 'red'; // заливаем прямоугольник красным цветом
// ctx.fillRect(100, 50, 150, 75); // рисуем прямоуголник с заданной начальной точки (100 - x координата, 50 - y координата) размером (150 px в длину и 75px в высоту)
// ctx.fillStyle = "yellow";
// ctx.fillRect(250, 150, 50, 50);
// ctx.clearRect(0, 0, 400, 200); // стирает весь холст. Если оставить к примеру (50, 100, 400, 200), то метод оставит не затертыми  часть холста. 400 это длина, 200 высота холста
// ctx.strokeStyle = "green";
// ctx.lineWidth = "10";
// ctx.rect(55, 55, 100, 100);
// ctx.stroke(); //рисуем прямоугольник (если не указана заливка, то рисуется просто контур)
// ctx.fill();

// -------------------lesson 2 (рисуем линии)------------
// let canvas = document.getElementById('c1');
// let ctx = canvas.getContext('2d');
// ctx.beginPath(); // начинаем новый путь
// ctx.moveTo(100, 50);
// ctx.lineTo(150, 150);
// ctx.strokeStyle = 'red';
// ctx.lineWidth = '5';
// ctx.stroke();

// ctx.beginPath() // Начинаем новый путь (чтоб следующая линия была окрашена в новый цвет, а предыдущая оставалась красной)
// ctx.moveTo(200, 50); // С этой точки начинается рисование линии (ставиться вэту точку карандаш)
// ctx.lineTo(300, 50); // Это конечная точку, куда нарисуется линия (это ведение карандаша до заданной точки)
// ctx.lineTo(300, 100);
// ctx.strokeStyle = 'green'; // Задает стиль линии - зеленый;
// ctx.lineWidth = '10'; // задает толщину линии
// // ctx.lineCap = 'round'; // закругляет края
// // ctx.lineCap = 'square'; //добавляет до краев небольшого размера прямоугольники
// ctx.lineCap = 'butt'; //
// ctx.stroke(); //
// ctx.clearRect(50, 100, 400, 200);

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(200, 150);
// ctx.lineTo(50, 150);
// ctx.closePath();
// ctx.fillStyle = "yellow" // заливаем треугольник желтым цветом
// ctx.fill();

// //------------------lesson 3 (рисуем кисточкой как в paint)
// let canvas = document.querySelector("#c1");
// let ctx = canvas.getContext("2d");
// let myColor = 'red';

// document.querySelector("#color").oninput = function () {
//     myColor = this.value; // присваиваем переменной myColor выбранное пользователем значение цвета
// }

// canvas.onmousedown = function (event) { // вызываем событие при нажатиии мыши
//     canvas.onmousemove = function (event) {
//         let x = event.offsetX; // получаем координату по оси x
//         let y = event.offsetY; // получаем координату по оси y
//         ctx.fillRect(x - 5, y - 5, 10, 10); // заливаем прямоугольник размером 10 на 10 пикселй и на расстоянии на 5 пикселей меньше
//         ctx.fillStyle = myColor;
//         ctx.fill();
//     }
//     canvas.onmouseup = function () {
//         canvas.onmousemove = null
//     }; // Обнуляем события при отпускании кнопки мыши

// }

// -----------------lesson 4 (круги, дуги и окружности)----
// let canvas = document.querySelector('#c1');
// let ctx = canvas.getContext("2d");
// let pi = Math.PI; // Получаем число пи

// ctx.lineWidth = 5;
// ctx.strokeStyle = 'red'
// ctx.fillStyle = "yellow";
// ctx.arc(150, 100, 75, 0, pi / 2, false); // arc - арка (дуга). устанваливаем карандаш в точку 150 - это по горизонтали и 100 - по вертикали. 75 - это длина радиуса. 0 - начальный угол, pi/2 - конечный угол (получается 90 градусов, потому как пи равно 180 градусов). false - направление рисования по часовой стрелке, true - против часовой.

// ctx.stroke();
// ctx.fill();

// ctx.beginPath();
// ctx.arc(300, 100, 50, 0, pi * 2, false); //рисуем круг. Направление false испольщовать обзательно 
// ctx.stroke();
// ctx.clearRect(0, 0, 400, 200);

// canvas.onmousemove = function (event) {
//     ctx.beginPath(); // начинаем новый путь
//     let x = event.offsetX;
//     ctx.clearRect(0, 0, 400, 200); // очищаем холст
//     ctx.arc(200, 100, Math.abs(x - 200), 0, 2 * pi, false) //false в современных браузерах можно не писать. Math.abs не дает отрицательное число в радиусе. 0 начальный радиус, 2*pi кончный радиус
//     ctx.stroke();
//     ctx.fill();
// }

//------------lesson 5 (анимируем фон)---------------------


// ------------lesson 7 (спирограф)---------------------
let canvas = document.querySelector("#c2");
let ctx = canvas.getContext("2d");
let myColor = "black";

document.querySelector("#myColor").oninput = function () {
    myColor = this.value;
} // выбираем цвет и присваиваем его ппеременной myColor 

let R = 150;
let r = 110;
let d = 40;
let teta = 0;
let timer;

function spiro() {
    // let R = Math.floor(Math.random() * 100); // Это отсебятина
    let x = (R - r) * Math.cos(teta) + d * Math.cos((R - r) * teta / r); // Формула из википедии Спирорграф_(игрушка). Math.cos - метод получения угла
    let y = (R - r) * Math.sin(teta) - d * Math.sin((R - r) * teta / r);
    teta = teta + 0.1;
    ctx.fillStyle = myColor;
    ctx.fillRect(300 + x, 300 + y, 4, 4) //смещаем x и y на координату 300\300, потому как изначально х и у стоят в позиции 0\0
    timer = setTimeout(spiro, 10);

}

spiro();