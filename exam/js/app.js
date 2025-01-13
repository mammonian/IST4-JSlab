document.addEventListener("DOMContentLoaded", () => {
    const OP1input = document.getElementById("op1");
    const OP2input = document.getElementById("op2");
    const resultDis = document.getElementById("res");
    const contentD = document.getElementById("content");

    function toRad(degr) {
        return degr * (Math.PI / 180);
    }

    function displayRes(result) {
        resultDis.textContent = `Result: ${result}`;
    }

    function getOpers() {
        const op1 = parseFloat(OP1input.value);
        const op2 = parseFloat(OP2input.value);

        if (isNaN(op1) || isNaN(op2)) {
            alert("Please enter valid numbers in both fields!");
            throw new Error("Invalid input");
        }
        return { op1, op2 };
    }

    function getOper1() {
        const op1 = parseFloat(OP1input.value);

        if (isNaN(op1)) {
            alert("Please enter a valid number in Operand 1 field!");
            throw new Error("Invalid input");
        }
        return op1;
    }

    async function helpInfo(fName) {
        const url = `./${fName}`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch help info.");
            const data = await response.json();

            if (data.description) {
                contentD.innerHTML = `<h4>${fName.toUpperCase()} Info:</h4><p>${data.description}</p>`;
            } else {
                contentD.innerHTML = `<p>No information found for ${fName}.</p>`;
            }
        } catch (error) {
            contentD.innerHTML = `<p>Error fetching help info: ${error.message}</p>`;
        }
    }

    document.getElementById("add-button").addEventListener("click", () => {
        const { op1, op2 } = getOpers();
        displayRes(op1 + op2);
    });

    document.getElementById("sub-button").addEventListener("click", () => {
        const { op1, op2 } = getOpers();
        displayRes(op1 - op2);
    });

    document.getElementById("mul-button").addEventListener("click", () => {
        const { op1, op2 } = getOpers();
        displayRes(op1 * op2);
    });

    document.getElementById("div-button").addEventListener("click", () => {
        const { op1, op2 } = getOpers();
        if (op2 === 0) {
            alert("Division by zero is not allowed.");
            displayRes("Error");
        } else {
            displayRes(op1 / op2);
        }
    });

    document.getElementById("log-button").addEventListener("click", () => {
        const op1 = getOper1();
        if (op1 <= 0) {
            alert("Logarithm is undefined for numbers less than or equal to 0.");
            displayRes("Error");
        } else {
            displayRes(Math.log(op1));
            helpInfo("data/log.json");
        }
    });

    document.getElementById("sin-button").addEventListener("click", () => {
        const op1 = getOper1();
        displayRes(Math.sin(toRad(op1)));
        helpInfo("data/sin.json");
    });

    document.getElementById("tan-button").addEventListener("click", () => {
        const op1 = getOper1();
        if ((op1 % 180 === 90) || (op1 % 180 === -90)) {
            alert("Tan is undefined for this angle.");
            displayRes("Error");
        } else {
            displayRes(Math.tan(toRad(op1)));
            helpInfo("data/tan.json");
        }
    });
});
