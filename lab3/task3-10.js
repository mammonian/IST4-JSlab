//1.2.3 – Створення об’єкта car1 за допомогою new Object()
let car1 = new Object();
car1.color = "yellow";
car1.maxSpeed = 190;
car1.driver = {
    name: "Benjamin Cordroy",
    category: "C",
    personalLimitations: "No driving at night"
};
car1.tuning = true;
car1.numberOfAccidents = 0;

//1.2.4 – Створення об’єкта car2 за допомогою літерала об’єкта
let car2 = {
    color: "black",
    maxSpeed: 250,
    driver: {
        name: "Arthur Doil",
        category: "B",
        personalLimitations: null
    },
    tuning: false,
    numberOfAccidents: 2
};

//1.2.5 – Додання методу drive до car1
car1.drive = function() {
    console.log("Benjamin Cordroy: -I am not driving at night");
};
// Перевірка роботи методу
car1.drive();  

//1.2.6 – Додання методу drive до car2
car2.drive = function() {
    console.log("Arthur Doil: -I can drive anytime");
};

// Викликаємо метод для перевірки
car2.drive(); 

//1.2.7 – Створення конструктора для "класу" Truck
function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
}

//1.2.8 – Додавання "статичного" методу AssignDriver за допомогою prototype
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};

//1.2.9 – Додавання методу trip в конструктор Truck
Truck.prototype.trip = function() {
    if (!this.driver) {
        console.log("No driver assigned");
    } else {
        let message = `Driver ${this.driver.name}`;
        message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
        message += ` and has ${this.driver.experience} years of experience.`;
        console.log(message);
    }
};

//1.2.10 – Створення двох об’єктів "класу" Truck та демонстрація методу trip
// Перший об'єкт з водієм, який може керувати вночі
let truck1 = new Truck("pink", 4950, 85.5, "Mercedes", "Actros");
truck1.AssignDriver("Bill Smith", true, 5);
truck1.trip();  

// Другий об'єкт з водієм, який не може керувати вночі
let truck2 = new Truck("green", 5000, 80.0, "Volvo", "FH16");
truck2.AssignDriver("Milana Kid", false, 3);
truck2.trip();  
