const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "AC") {
            display.value = "";
        }

        else if (value === "DEL") {
            display.value = display.value.slice(0, -1);
        }

        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }

        else {
            display.value += value;
        }
    });
});

document.addEventListener("keydown", (e) => {

    const allowed = "0123456789+-*/.%";

    if (allowed.includes(e.key)) {
        display.value += e.key;
    }

    if (e.key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

    if (e.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    if (e.key === "Escape") {
        display.value = "";
    }
});