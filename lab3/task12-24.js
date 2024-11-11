// 1.2.12 - 1.2.13: Клас Square
class Square {
    constructor(a) {
        this.a = a; // сторона квадрата
    }

    // 1.2.14: Статичний метод для довідки
    static help() {
        console.log("Square: всі сторони рівні, кути — 90 градусів.");
    }

    // 1.2.15: Метод для обчислення периметру
    length() {
        console.log(`Периметр квадрата: ${4 * this.a}`);
    }

    // Метод для обчислення площі
    square() {
        console.log(`Площа квадрата: ${this.a * this.a}`);
    }

    // Метод для повної інформації
    info() {
        console.log(`Квадрат:`);
        console.log(`Сторона: ${this.a}`);
        console.log(`Кути: 4 по 90°`);
        console.log(`Периметр: ${4 * this.a}`);
        console.log(`Площа: ${this.a * this.a}`);
    }
}

// 1.2.16 - 1.2.17: Клас Rectangle, успадкований від Square
class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    // Перевизначений статичний метод help
    static help() {
        console.log("Rectangle: протилежні сторони рівні, кути — 90 градусів.");
    }

    // Перевизначений метод для обчислення периметру
    length() {
        console.log(`Периметр прямокутника: ${2 * (this.a + this.b)}`);
    }

    // Перевизначений метод для обчислення площі
    square() {
        console.log(`Площа прямокутника: ${this.a * this.b}`);
    }

    // Перевизначений метод для повної інформації
    info() {
        console.log(`Прямокутник:`);
        console.log(`Сторони: ${this.a} і ${this.b}`);
        console.log(`Кути: 4 по 90°`);
        console.log(`Периметр: ${2 * (this.a + this.b)}`);
        console.log(`Площа: ${this.a * this.b}`);
    }
}

// 1.2.18 - 1.2.19: Клас Rhombus, успадкований від Square
class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    // Перевизначений статичний метод help
    static help() {
        console.log("Rhombus: всі сторони рівні, протилежні кути рівні.");
    }

    // Перевизначений метод для обчислення периметру
    length() {
        console.log(`Периметр ромба: ${4 * this.a}`);
    }

    // Перевизначений метод для обчислення площі
    square() {
        console.log(`Площа ромба: ${this.a * this.a * Math.sin(this.alpha * Math.PI / 180)}`);
    }

    // Перевизначений метод для повної інформації
    info() {
        console.log(`Ромб:`);
        console.log(`Сторона: ${this.a}`);
        console.log(`Кути: ${this.alpha}° і ${this.beta}°`);
        console.log(`Периметр: ${4 * this.a}`);
        console.log(`Площа: ${this.a * this.a * Math.sin(this.alpha * Math.PI / 180)}`);
    }
}

// 1.2.20 - 1.2.21: Клас Parallelogram, успадкований від Rhombus
class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    // Перевизначений статичний метод help
    static help() {
        console.log("Parallelogram: протилежні сторони і кути рівні.");
    }

    // Перевизначений метод для обчислення периметру
    length() {
        console.log(`Периметр паралелограма: ${2 * (this.a + this.b)}`);
    }

    // Перевизначений метод для обчислення площі
    square() {
        console.log(`Площа паралелограма: ${this.a * this.b * Math.sin(this.alpha * Math.PI / 180)}`);
    }

    // Перевизначений метод для повної інформації
    info() {
        console.log(`Паралелограм:`);
        console.log(`Сторони: ${this.a} і ${this.b}`);
        console.log(`Кути: ${this.alpha}° і ${this.beta}°`);
        console.log(`Периметр: ${2 * (this.a + this.b)}`);
        console.log(`Площа: ${this.a * this.b * Math.sin(this.alpha * Math.PI / 180)}`);
    }
}

// 1.2.22: Геттери та сеттери для класу Rhombus
Object.defineProperties(Rhombus.prototype, {
    'alpha': {
        get() {
            return this._alpha;
        },
        set(value) {
            this._alpha = value;
        }
    },
    'beta': {
        get() {
            return this._beta;
        },
        set(value) {
            this._beta = value;
        }
    }
});

// 1.2.23: Виклик статичних методів help для кожного класу
Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

// 1.2.24: Створення об'єктів кожного класу та виклик методу info
const square = new Square(8);
const rectangle = new Rectangle(5, 7);
const rhombus = new Rhombus(5, 120, 60);
const parallelogram = new Parallelogram(9, 11, 120, 60);

square.info();
rectangle.info();
rhombus.info();
parallelogram.info();
