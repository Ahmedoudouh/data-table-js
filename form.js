const nameElement = document.getElementById("name-add-customer")
let style = document.getElementById("form-progress");
const numberElement = document.getElementById("number-add-customer");
const number = document.getElementById("number");
const description = document.getElementById("description");
const deposit = document.getElementById("deposit");
const balance = document.getElementById("balance");
const currency = document.getElementById("currency");
const rate = document.getElementById("rate");
const descriptionElement = document.getElementById("description-add-customer");
const rateElement = document.getElementById("rate-add-customer");
const balanceElement = document.getElementById("balance-add-customer");
const depositElement = document.getElementById("deposit-add-customer");
const activeInactiveElement = document.getElementById("active-inactive");
const currencyElement = document.getElementById("currency");
let inputsElements = Array.from(document.querySelectorAll(".inputAdd"))
let test = []
let styleProgress = document.getElementById("style-progress")
const myProgressBar = document.querySelector(".progress");
let Exit = document.getElementById("Exit")
let duplicate = document.getElementById("duplicate")
let emptyInput = Array.from(document.querySelectorAll('.input-saerch'));
const submitButton = document.getElementById("submit");
let Update = document.getElementById("Update")
let submit2 = document.getElementById("submit2")
let exit2 = document.getElementById("Exit2")


function checkInputs() {
    checkall()
    if (inputsElements.every(field => field.classList.contains("border-color-green"))) {
        test = []
        updateProgress()
        var newObject = {};
        newObject.name = nameElement.value
        newObject.number = numberElement.value
        newObject.description = descriptionElement.value
        newObject.rate = rateElement.value
        newObject.balance = balanceElement.value
        newObject.deposit = depositElement.value
        newObject.inr = currencyElement.value
        newObject.status = activeInactiveElement.value
        newObject.protect = "unlock"
        newObject.select = "unchecked"
        newObject.borderRow = "highlight"
        customers.unshift(newObject)
        inputsElements.forEach((field) => {
            field.classList.remove("border-color-green")
        })
        emptyInput.forEach((field) => {
            field.value = ""
        })
        activeInactiveElement.value = "status"
        currency.value = "currency"
        styleProgress.style.display = "none";
        localStorage.setItem('Local', JSON.stringify(customers));
        new URL(window.location.replace("table.html"))
    }
}
Exit.style.display = "none"

function checkall() {
    checkName(nameElement)
    checkNumber(numberElement)
    checkDescription(descriptionElement)
    checkRate(rateElement)
    checkBalance(balanceElement)
    checkDeposit(depositElement)
    checkStatuts(activeInactiveElement)
    checkCurrency(currencyElement)
}

function setErrorFor(input, message) {
    const small = input.nextElementSibling
    input.classList.add("border-color")
    input.classList.remove("border-color-green")
    small.innerText = message;
}

function setSuccessFor(input) {
    const small = input.nextElementSibling
    input.classList.remove("border-color")
    input.classList.add("border-color-green")
    small.innerText = "";
}

nameElement.addEventListener("input", () => {
    checkName(nameElement)
    progress(0)
})
nameElement.addEventListener("blur", () => {
    progress(0)
})

function checkName(nameinput, array = customers) {
    if (unique(nameinput.value.toLowerCase(), array)) {
        setErrorFor(nameinput, 'customer name already exists!');
    } else if (nameinput.value === '') {
        setErrorFor(nameinput, 'name is required !');
    } else if (!nameinput.value.match("[a-z A-Z]+$")) {
        setErrorFor(nameinput, 'customer name must be string');
    } else {
        setSuccessFor(nameinput);
    }
}

numberElement.addEventListener("input", () => {
    checkNumber(numberElement)
    progress(1)
});
numberElement.addEventListener("blur", () => progress(1));

function checkNumber(namberinput, array = customers) {
    if (unique(namberinput.value, array)) {
        setErrorFor(namberinput, 'customer number already exists!');
    } else if (namberinput.value === '') {
        setErrorFor(namberinput, 'number is required!!');
    } else if (namberinput.value.match("[a-z A-Z]+$")) {
        setErrorFor(namberinput, 'customer number must be number');
    } else if (namberinput.value.length !== 10) {
        setErrorFor(namberinput, 'cleint Number should be 10 digits!');
    } else {
        setSuccessFor(namberinput)
    }
}

descriptionElement.addEventListener("input", () => {
    checkDescription(descriptionElement)
    progress(2)
});
descriptionElement.addEventListener("blur", () => progress(2));

function checkDescription(descriptioninput) {
    if (descriptioninput.value === '') {
        setErrorFor(descriptioninput, 'description is required!');
    } else if (descriptioninput.value.length <= 10) {
        setErrorFor(descriptioninput, 'description should have 10 characters!');
    } else {
        setSuccessFor(descriptioninput)
    }
}

rateElement.addEventListener("input", () => {
    checkRate(rateElement)
    progress(3)
});
rateElement.addEventListener("blur", () => progress(3));

function checkRate(rateinput) {
    if (rateinput.value === '') {
        setErrorFor(rateinput, 'rate is required!');
    } else if (rateinput.value.match("^[a-z A-Z]+$")) {
        setErrorFor(rateinput, 'customer rate must be number!');
    } else {
        setSuccessFor(rateinput)
    }
}

balanceElement.addEventListener("input", () => {
    checkBalance(balanceElement)
    progress(4)
});
balanceElement.addEventListener("blur", () => progress(4));

function checkBalance(balanceinput) {
    if (balanceinput.value === '') {
        setErrorFor(balanceinput, 'balance is required!');
    } else if (balanceinput.value.match("^[a-z A-Z]+$")) {
        setErrorFor(balanceinput, 'customer balance must be number!');
    } else {
        setSuccessFor(balanceinput)
    }
}

depositElement.addEventListener("input", () => {
    checkDeposit(depositElement)
    progress(5)
});
depositElement.addEventListener("blur", () => progress(5));

function checkDeposit(depositElement) {
    if (depositElement.value === '') {
        setErrorFor(depositElement, 'deposit is required!');
    } else if (depositElement.value.match("^[a-z A-Z]+$")) {
        setErrorFor(depositElement, 'customer deposit must be number!');
    } else {
        setSuccessFor(depositElement)
    }
}

activeInactiveElement.addEventListener("change", () => {
    checkStatuts(activeInactiveElement)
    progress(6)
});
activeInactiveElement.addEventListener("blur", () => progress(6));

function checkStatuts(statuts) {
    if (statuts.value === "status") {
        setErrorFor(statuts, 'status is required!');
    } else {
        setSuccessFor(statuts)
    }
}

currencyElement.addEventListener("change", () => {
    checkCurrency(currencyElement)
    progress(7)

});
currencyElement.addEventListener("blur", () => progress(7));

function checkCurrency(currency) {
    if (currency.value === "currency") {
        setErrorFor(currency, 'currency is required!');
    } else {
        setSuccessFor(currency)
    }
}

function unique(value, array) {
    var boolean = false
    array.forEach((elementArray) => {
        if (elementArray.number == value || elementArray.name === value) {
            boolean = true
        }
    });
    return boolean
}

function progress(index) {
    var boolean = inputsElements[index].classList.contains("border-color-green")
    if (boolean) {
        if (!test.includes(index)) {
            test.push(index)
            styleProgress.style.display = "block"
        }
    } else if (test.includes(index)) {
        let result = test.indexOf(index)
        test.splice(result, 1)
    }
    updateProgress();
}

function updateProgress() {
    var d = (100 / 8) * test.length
    d = Math.round(d);
    myProgressBar.querySelector(".progress-text").textContent = `${d}%`;
    myProgressBar.querySelector(".progress-fill").style.width = `${d}%`;
}

function getFromLocal() {
    if (localStorage.getItem('Local') == null) {
        let customers = []
        localStorage.setItem('Local', JSON.stringify(customers));
    }
    if (localStorage.getItem('Local') !== null) {
        customers = JSON.parse(localStorage.getItem('Local'))
    }
};

getFromLocal()

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});
exit2.addEventListener("click", () => {
    inputsElements.forEach((field) => field.classList.remove("border-color-green"))
    inputsElements.forEach(field => field.nextElementSibling.innerText = " ")
    inputsElements.forEach(field => field.value = "")
    inputsElements.forEach(field => field.classList.remove("border-color"))
    activeInactiveElement.value = "status"
    currency.value = "currency"
    styleProgress.style.display = "none";
    url = new URL(window.location.replace("table.html"))
});
Exit.style.display = "none"
Exit.addEventListener("click", () => {
    inputsElements.forEach(field => field.nextElementSibling.innerText = " ")
    inputsElements.forEach(field => field.value = "")
    inputsElements.forEach(field => field.classList.remove("border-color"))
    inputsElements.forEach(field => field.classList.remove("border-color-green"))
    activeInactiveElement.value = "status"
    currency.value = "currency"
    test = []
    Update.style.display = "none"
    submitButton.style.display = "flex"
    Exit.style.display = "none"
    exit2.style.display = "block"
    url = new URL(window.location.replace("table.html"))
});
Update.addEventListener('click', () => {
    if (inputsElements.every(field => field.classList.contains("border-color-green"))) {
        var newObject = {};
        newObject.name = nameElement.value
        newObject.number = numberElement.value
        newObject.description = descriptionElement.value
        newObject.rate = rateElement.value
        newObject.balance = balanceElement.value
        newObject.deposit = depositElement.value
        newObject.inr = currencyElement.value
        newObject.status = activeInactiveElement.value
        newObject.select = "unchecked"
        newObject.protect = "unlock"
        newObject.borderRow = "highlightUpdate"
        let indexToEdit = url.searchParams.get('index')
        customers.splice(indexToEdit, 1, newObject)
        test = []
        updateProgress()
        localStorage.setItem('Local', JSON.stringify(customers));
        Update.style.display = "none"
        submitButton.style.display = "flex"
        Exit.style.display = "none"
        exit2.style.display = "block"
        url = new URL(window.location.replace("table.html"))
    }
});
duplicate.addEventListener("click", () => {
    if (inputsElements.every(field => field.classList.contains("border-color-green"))) {
        var newObject = {};
        newObject.name = nameElement.value
        newObject.number = numberElement.value
        newObject.description = descriptionElement.value
        newObject.rate = rateElement.value
        newObject.balance = balanceElement.value
        newObject.deposit = depositElement.value
        newObject.inr = currencyElement.value
        newObject.status = activeInactiveElement.value
        newObject.select = "unchecked"
        newObject.protect = "unlock"
        newObject.borderRow = "highlight"
        let indexToUpdate = url.searchParams.get('index')
        indexToUpdate++
        customers.splice(indexToUpdate, 0, newObject)
        localStorage.setItem('Local', JSON.stringify(customers));
        test = []
        updateProgress()
        emptyInput.forEach(field => field.value = "")
        emptyInput.forEach((field) => field.classList.remove("border-color"))
        emptyInput.forEach(field => field.nextElementSibling.innerText = "")
        emptyInput.forEach((field) => field.classList.remove("border-color-green"))
        activeInactiveElement.value = "status"
        currency.value = "currency"
        new URL(window.location.replace("table.html"))
    }

});
submit2.addEventListener('click', () => {
    if (inputsElements.every(field => field.classList.contains("border-color-green"))) {
        var newObject = {};
        newObject.name = nameElement.value
        newObject.number = numberElement.value
        newObject.description = descriptionElement.value
        newObject.rate = rateElement.value
        newObject.balance = balanceElement.value
        newObject.deposit = depositElement.value
        newObject.inr = currencyElement.value
        newObject.status = activeInactiveElement.value
        newObject.select = "unchecked"
        newObject.protect = "unlock"
        newObject.borderRow = "highlight"
        var indexf = url.searchParams.get('index')
        indexf++
        customers.splice(indexf, 0, newObject)
        localStorage.setItem('Local', JSON.stringify(customers));
        new URL(window.location.href = "table.html")
        test = []
        updateProgress()
        inputsElements.forEach(field => field.value = "")
        inputsElements.forEach((field) => field.classList.remove("border-color-green"))
        inputsElements.forEach((field) => field.classList.remove("border-color"))
        inputsElements.forEach(field => field.nextElementSibling.innerText = " ")
        activeInactiveElement.value = "status"
        currency.value = "currency"
        new URL(window.location.replace("table.html"))
    }
});
var url = new URL(window.location)
if (url.searchParams.get('function') == "plusCustomer") {
    //
    submit2.style.display = "block";
    submitButton.style.display = "none";
    exit2.style.display = "block"
    Exit.style.display = "none"
}
customers.forEach((customerToEdit) => {
    if (url.searchParams.get('function') == "editCustomer" && customers.indexOf(customerToEdit) == url.searchParams.get('index')) {
        Exit.style.display = "block"
        exit2.style.display = "none"
        submitButton.style.display = "none"
        submit2.style.display = "none"
        Update.style.display = "block"
        styleProgress.style.display = "block";
        console.log(customerToEdit)
        let copyAllrows = customers.slice()
        filltredEleme = copyAllrows.filter((customer) => customers.indexOf(customer) != url.searchParams.get('index'))
            //
        nameElement.value = customerToEdit.name
        numberElement.value = customerToEdit.number
        descriptionElement.value = customerToEdit.description
        rateElement.value = customerToEdit.rate
        balanceElement.value = customerToEdit.balance
        depositElement.value = customerToEdit.deposit
        activeInactiveElement.value = customerToEdit.status
        currencyElement.value = customerToEdit.inr
            //
        checkName(nameElement, filltredEleme)
        progress(0)
        checkNumber(numberElement, filltredEleme)
        progress(1)
        checkDescription(descriptionElement)
        progress(2)
        checkRate(rateElement)
        progress(3)
        checkBalance(balanceElement)
        progress(4)
        checkDeposit(depositElement)
        progress(5)
        checkStatuts(activeInactiveElement)
        progress(6)
        checkCurrency(currencyElement)
        progress(7)
    }

})
customers.forEach((customerToDuplicate) => {
    if (url.searchParams.get('function') == "duplicateCustomer" && customers.indexOf(customerToDuplicate) == url.searchParams.get('index')) {
        //
        nameElement.value = customerToDuplicate.name
        numberElement.value = customerToDuplicate.number
        descriptionElement.value = customerToDuplicate.description
        rateElement.value = customerToDuplicate.rate
        balanceElement.value = customerToDuplicate.balance
        depositElement.value = customerToDuplicate.deposit
        activeInactiveElement.value = customerToDuplicate.status
        currencyElement.value = customerToDuplicate.inr
            //
        checkName(nameElement)
        progress(0)
        checkNumber(numberElement)
        progress(1)
        checkDescription(descriptionElement)
        progress(2)
        checkRate(rateElement)
        progress(3)
        checkBalance(balanceElement)
        progress(4)
        checkDeposit(depositElement)
        progress(5)
        checkStatuts(activeInactiveElement)
        progress(6)
        checkCurrency(currencyElement)
        progress(7)
        submitButton.style.display = "none"
        Update.style.display = "none"
        styleProgress.style.display = "block";
        duplicate.style.display = "flex"
        submit2.style.display = "none"
    }
})