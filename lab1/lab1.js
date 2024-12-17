function triangle(value1, type1, value2, type2) {
    console.log("Інструкція: Використовуйте два відомих елементи трикутника для обчислення інших. Типи: 'leg' (катет), 'hypotenuse' (гіпотенуза), 'adjacentAngle' (прилеглий кут), 'oppositeAngle' (протилежний кут).");

    let a, b, c, alpha, beta;

    // Масив допустимих типів
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle"];
    
    // Перевірка правильності типів
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        console.log("Помилка: Невірне значення типу. Перевірте введені типи.");
        return "failed";
    }

    // Перевірка сумісності типів
    if ((type1 === "opposite angle" && type2 === "leg") || (type1 === "leg" && type2 === "opposite angle")) {
        console.log("Ця комбінація типів не підтримується.");
        return "failed";
    }
    
   
    if (type1 === "leg" && type2 === "leg") {
        // Якщо дано два катети
        a = value1;
        b = value2;
        c = Math.sqrt(a * a + b * b);
        alpha = toDegrees(Math.asin(a / c));
        beta = toDegrees(Math.asin(b / c));
    } else if ((type1 === "leg" && type2 === "hypotenuse") || (type1 === "hypotenuse" && type2 === "leg")) {
        // Якщо дано катет і гіпотенузу
        if (type1 === "leg") {
            a = value1;
            c = value2;
        } else {
            a = value2;
            c = value1;
        }
        if (a >= c) {
            console.log("Помилка: Катет не може бути більше або дорівнювати гіпотенузі.");
            return "failed";
        }
        b = Math.sqrt(c * c - a * a);
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
    } else if ((type1 === "leg" && type2 === "adjacent angle") || (type1 === "adjacent angle" && type2 === "leg")) {
        // Якщо дано катет і прилеглий гострий кут
        if (type1 === "leg") {
            a = value1;
            alpha = value2;
        } else {
            a = value2;
            alpha = value1;
        }
        c = a / Math.cos(toRadians(alpha));
        b = Math.sqrt(c * c - a * a);
        beta = 90 - alpha;
    } else if ((type1 === "leg" && type2 === "opposite angle") || (type1 === "opposite angle" && type2 === "leg")) {
        // Якщо дано катет і протилежний гострий кут
        if (type1 === "leg") {
            a = value1;
            alpha = value2;
        } else {
            a = value2;
            alpha = value1;
        }
        c = a / Math.sin(toRadians(alpha));
        b = Math.sqrt(c * c - a * a);
        beta = 90 - alpha;
    } else if ((type1 === "hypotenuse" && type2 === "adjacent angle") || (type1 === "adjacent angle" && type2 === "hypotenuse")) {
        // Якщо дано гіпотенузу і прилеглий гострий кут
        if (type1 === "hypotenuse") {
            c = value1;
            alpha = value2;
        } else {
            c = value2;
            alpha = value1;
        }
        a = c * Math.cos(toRadians(alpha));
        b = Math.sqrt(c * c - a * a);
        beta = 90 - alpha;
    } else {
        console.log("Неправильні типи аргументів. Перечитайте інструкцію.");
        return "failed";
    }

    // Виведення результатів
    console.log(`a (катет): ${a.toFixed(2)}`);
    console.log(`b (катет): ${b.toFixed(2)}`);
    console.log(`c (гіпотенуза): ${c.toFixed(2)}`);
    console.log(`alpha (кут навпроти a): ${alpha.toFixed(2)}°`);
    console.log(`beta (кут навпроти b): ${beta.toFixed(2)}°`);

    return "success";
}

// Функції для перетворення градусів і радіанів
function toRadians(degrees) {
    return degrees * Math.PI / 180;
}

function toDegrees(radians) {
    return radians * 180 / Math.PI;
}
