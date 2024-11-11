//1.2.25 Створення функції Triangular
function Triangular(a = 9, b = 4, c = 6) {
    return { a, b, c };
}

//1.2.26 Створення трьох об'єктів через функцію Triangular
const triangle1 = Triangular();
const triangle2 = Triangular(11, 6, 9);
const triangle3 = Triangular(3, 12, 22);

console.log(triangle1);  
console.log(triangle2);  
console.log(triangle3);  

//1.2.27 Створення функції PiMultiplier
function PiMultiplier(multiplier) {
    return function() {
        return Math.PI * multiplier;
    };
}

//1.2.28 Створення трьох функцій для множення числа π
const multiplyPiBy2 = PiMultiplier(2);
const multiplyPiByTwoThirds = PiMultiplier(2 / 3);
const dividePiBy2 = PiMultiplier(1 / 2);

console.log(multiplyPiBy2());  
console.log(multiplyPiByTwoThirds());  
console.log(dividePiBy2());  

//1.2.29 Створення функції Painter
function Painter(color) {
    return function(obj) {
        if (obj.hasOwnProperty('type')) {
            console.log(`${color}: ${obj.type}`);
        } else {
            console.log("No ‘type’ property occurred!");
        }
    };
}

//1.2.30 Створення функцій для фарбування об'єктів
const PaintBlue = Painter('Blue');
const PaintRed = Painter('Red');
const PaintYellow = Painter('Yellow');

//1.2.31 Демонстрація роботи функцій на об'єктах
const obj1 = { maxSpeed: 280, type: 'Sportcar', color: 'magenta' };
const obj2 = { type: 'Truck', avgSpeed: 90, loadCapacity: 2400 };
const obj3 = { maxSpeed: 180, color: 'purple', isCar: true };

PaintBlue(obj1);   
PaintRed(obj2);    
PaintYellow(obj3); 
