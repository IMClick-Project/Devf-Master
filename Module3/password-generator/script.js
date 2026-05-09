// Proyecto: Password Generator App basado en Frontend Mentor

const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");

const strengthText = document.getElementById("strengthText");
const bars = document.querySelectorAll(".bar");
const message = document.getElementById("message");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

lengthInput.addEventListener("input", function () {
    lengthValue.textContent = lengthInput.value;
});

function getRandomCharacter(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function generatePassword() {
    const length = Number(lengthInput.value);
    let characters = "";
    let password = "";

    message.textContent = "";

    if (uppercaseInput.checked) {
        characters += uppercaseLetters;
        password += getRandomCharacter(uppercaseLetters);
    }

    if (lowercaseInput.checked) {
        characters += lowercaseLetters;
        password += getRandomCharacter(lowercaseLetters);
    }

    if (numbersInput.checked) {
        characters += numbers;
        password += getRandomCharacter(numbers);
    }

    if (symbolsInput.checked) {
        characters += symbols;
        password += getRandomCharacter(symbols);
    }

    if (characters === "") {
        message.textContent = "Selecciona al menos una opción.";
        passwordInput.value = "";
        updateStrength(0, 0);
        return;
    }

    for (let i = password.length; i < length; i++) {
        password += getRandomCharacter(characters);
    }

    password = shufflePassword(password);
    passwordInput.value = password;

    updateStrength(length, getSelectedOptions());
}

function shufflePassword(password) {
    return password
        .split("")
        .sort(function () {
            return Math.random() - 0.5;
        })
        .join("");
}

function getSelectedOptions() {
    let options = 0;

    if (uppercaseInput.checked) options++;
    if (lowercaseInput.checked) options++;
    if (numbersInput.checked) options++;
    if (symbolsInput.checked) options++;

    return options;
}

function updateStrength(length, options) {
    bars.forEach(function (bar) {
        bar.classList.remove("active");
    });

    let strength = 0;
    let text = "";

    if (length >= 8 && options >= 1) {
        strength = 1;
        text = "WEAK";
    }

    if (length >= 10 && options >= 2) {
        strength = 2;
        text = "MEDIUM";
    }

    if (length >= 12 && options >= 3) {
        strength = 3;
        text = "GOOD";
    }

    if (length >= 14 && options === 4) {
        strength = 4;
        text = "STRONG";
    }

    strengthText.textContent = text || "NONE";

    for (let i = 0; i < strength; i++) {
        bars[i].classList.add("active");
    }
}

copyBtn.addEventListener("click", function () {
    if (passwordInput.value === "") {
        message.textContent = "Primero genera una contraseña.";
        return;
    }

    navigator.clipboard.writeText(passwordInput.value);
    message.textContent = "Contraseña copiada.";
});

generateBtn.addEventListener("click", generatePassword);

generatePassword();