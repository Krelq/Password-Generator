const passText = document.getElementById('password');
const button = document.getElementById('generate');
const lengthCounter = document.getElementById('lengthCounter');

button.addEventListener("click", function() {
    passText.innerHTML = generatePassword(lengthCounter.innerHTML);
});


function generatePassword(length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        pass = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    return pass;
}

function updateCounter(number) {
    lengthCounter.innerHTML = number;
}