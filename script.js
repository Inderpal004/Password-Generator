let upperSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerSet = 'abcdefghijklmnopqrstuvwxyz';
let numberSet = '1234567890';
let specialSet = '!@#$%^&*()+?~';

const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

function randomData(dataSet) {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

function generatePassword(password = '') {
    if (upperInput.checked) {
        password += randomData(upperSet)
    }
    if (lowerInput.checked) {
        password += randomData(lowerSet)
    }
    if (numberInput.checked) {
        password += randomData(numberSet)
    }
    if (symbolInput.checked) {
        password += randomData(specialSet)
    }

    if(password.length <= totalChar.value){
        return generatePassword(password)
    }
    
    passBox.innerHTML = (password.slice(0, totalChar.value))
}

generatePassword()

btn.addEventListener('click', function () {
    generatePassword()
})