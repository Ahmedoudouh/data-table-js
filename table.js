const nameElement = document.getElementById("name-add-customer")
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
const check = document.querySelectorAll(".error");
const form = document.getElementById('form');
let noticeElement = document.getElementById("notice");
let Update = document.getElementById("Update")
let successfulElement = document.getElementById("successful")
let exit2 = document.getElementById("Exit2")
let Exit = document.getElementById("Exit")
let test = []
let table = document.getElementById("mytbody");
let searchElement = document.getElementById("search");
let displayRows = document.getElementById("count-page");
let select = document.getElementById("select");
let nextPage = document.getElementById("arrow-right");
let previousPage = document.getElementById("arrow-left");
let customerStatus = document.getElementById("customer-status");
let elementName = document.getElementById("name-customer");
let arrowDown = document.getElementById("arrow-down");
let arrowUp = document.getElementById("arrow-up");
let arrowUpStatuts = document.getElementById("arrow-up-status");
let arrowDownStatuts = document.getElementById("arrow-down-status");
let lengthArray = document.getElementById("bold");
let lengthStatuts = document.getElementById("lengthArray");
let style = document.getElementById("form-progress");
let edit = document.getElementById("edit");
let editD = document.getElementById("editDiv");
let sort = document.getElementById("combinedSort");
let sortStyle = document.getElementById("combinedStyle");
let iconDelete = document.getElementById("iconDelete");
let styleTdIcon = document.querySelector(".style-td-icon");
let deleteElem;
let statutsOrder = "undefined";
let rowsPage = 5;
let currentPage = 0;
let sortedCustomers;
let orderName = "undefined";
const myProgressBar = document.querySelector(".progress");
var indexOfCustomer;
var rows;
var trueV;
var lock;
getFromLocal()

function myFunction(message) {
    noticeElement.className = "notice"
    successfulElement.innerText = message;
    setTimeout(function() {
        noticeElement.className = "notice-none";
    }, 3000);
}

function creatElement(customer) {
    let row = document.createElement("tr");
    row.className = "tdClass array"
    row.innerHTML = "";
    let cellInput = document.createElement("td");
    cellInput.className = "style-icon"
        //
    row.appendChild(cellInput);
    let groupIcon = document.createElement("div");
    groupIcon.className = "group-icon-is"
    cellInput.appendChild(groupIcon);
    //
    let unlock = document.createElement("img");
    if (customer.protect == "unlock") {
        unlock.src = "images/unlocked.png";
        unlock.id = "unlocked"
        unlock.className = "withe-icon"
    }
    let lock = document.createElement("img");
    if (customer.protect == "lock") {
        lock.src = "images/padlocked.png";
        lock.id = "lock"
        lock.className = "withe-icon"
    }
    groupIcon.appendChild(lock);
    groupIcon.appendChild(unlock);
    //
    let divpadlockex = document.createElement("div");
    divpadlockex.innerHTML = '<img class="withe-icon" id="plus" src="images/plus.png"/>';
    divpadlockex.onclick = () => {
        var parametrpluscustomer = `function=plusCustomer&index=${pluscustomer(customers, customer)}`
        new URL(window.location.replace(`index.html?${parametrpluscustomer}`))
    }
    groupIcon.appendChild(divpadlockex);
    //
    let checkbox = document.createElement("div");
    checkbox.innerHTML = `<input class="checkbox" id="checkbox" type="checkbox" ${customer.select}/>`;
    checkbox.className = " td";
    cellInput.appendChild(checkbox)
        //td 2
    let cellName = document.createElement("td");
    cellName.className = "td"
    row.appendChild(cellName);
    //div
    let divGroupName = document.createElement("div");
    divGroupName.className = "group-customr";
    cellName.appendChild(divGroupName);
    //span
    let cellSpanName = document.createElement("span");
    cellSpanName.className = "customr-name";
    cellSpanName.textContent = customer.name;
    divGroupName.appendChild(cellSpanName);
    //span
    let cellSpanNumber = document.createElement("strong");
    cellSpanNumber.className = "customr-number";
    cellSpanNumber.textContent = customer.number;
    divGroupName.appendChild(cellSpanNumber);
    //td 3
    let cellDescription = document.createElement("td");
    cellDescription.className = "td"
    row.appendChild(cellDescription);
    //div
    let divDescription = document.createElement("div");
    divDescription.className = "paragraph-customr";
    cellDescription.appendChild(divDescription);
    //span
    let spanDescription = document.createElement("span");
    spanDescription.textContent = customer.description;
    spanDescription.className = "paragraphUpdate";
    divDescription.appendChild(spanDescription);
    //td 4
    let cellRate = document.createElement("td");
    cellRate.className = "td"
    row.appendChild(cellRate);
    //div
    let divCellRateOne = document.createElement("div");
    divCellRateOne.className = "group-customr-b";
    cellRate.appendChild(divCellRateOne);
    //span
    let spanCellRateOne = document.createElement("span");
    spanCellRateOne.className = "number rateUpdate";
    spanCellRateOne.textContent = customer.rate;
    divCellRateOne.appendChild(spanCellRateOne);
    //span
    let spanCellRateTwo = document.createElement("span");
    spanCellRateTwo.className = "inr";
    spanCellRateTwo.textContent = customer.inr;
    divCellRateOne.appendChild(spanCellRateTwo);
    //td 5
    let cellBalance = document.createElement("td");
    cellBalance.className = "td"
    row.appendChild(cellBalance);
    //div
    let divCellBalanceOne = document.createElement("div");
    divCellBalanceOne.className = "group-customr-b";
    cellBalance.appendChild(divCellBalanceOne);
    //span
    let spanCellBalanceOne = document.createElement("span");
    spanCellBalanceOne.className = "number balanceUpdate color-original";
    spanCellBalanceOne.textContent = customer.balance;
    divCellBalanceOne.appendChild(spanCellBalanceOne);
    //
    if (customer.balance > 0) {
        spanCellBalanceOne.className = "color-green number balanceUpdate";
    }
    if (customer.balance < 0) {
        spanCellBalanceOne.className = "color-red number balanceUpdate";
    }
    //span
    let spanCellBalanceTwo = document.createElement("span");
    spanCellBalanceTwo.className = "inr";
    spanCellBalanceTwo.textContent = customer.inr;
    divCellBalanceOne.appendChild(spanCellBalanceTwo);
    //
    let cellDeposit = document.createElement("td");
    cellDeposit.className = "td"
    row.appendChild(cellDeposit);
    //div
    let divCellDepositOne = document.createElement("div");
    divCellDepositOne.className = "group-customr-b";
    cellDeposit.appendChild(divCellDepositOne);
    //span
    let spanCellDepositOne = document.createElement("span");
    spanCellDepositOne.className = "number depositUpdate";
    spanCellDepositOne.textContent = customer.deposit;
    divCellDepositOne.appendChild(spanCellDepositOne);
    //span
    let spanCellDepositTwo = document.createElement("span");
    spanCellDepositTwo.className = "inr";
    spanCellDepositTwo.textContent = customer.inr;
    divCellDepositOne.appendChild(spanCellDepositTwo);
    //td 6
    let cellStatus = document.createElement("td");
    cellStatus.className = "td"
    row.appendChild(cellStatus);
    //div
    let divCellStatus = document.createElement("div");
    cellStatus.appendChild(divCellStatus);
    //
    let buttonCellStatus = document.createElement("button");
    buttonCellStatus.className = "ctaActive statusUpdate";
    buttonCellStatus.textContent = customer.status;
    divCellStatus.appendChild(buttonCellStatus);
    if (customer.status == "INACTIVE") {
        buttonCellStatus.classList.add("active");
    }
    if (customer.status == "ACTIVE") {
        buttonCellStatus.classList.add("inactive");
    }
    let celldelete = document.createElement("td");
    celldelete.className = "td style-td-icon"
    row.appendChild(celldelete)
        //div   
    let divcellCopy = document.createElement("div");
    divcellCopy.innerHTML = '<img  class="icon" id="iconCopy" src="images/copy.png" />'
    divcellCopy.onclick = () => {
        var parametrx = `function=duplicateCustomer&index=${duplicateCustomrers(customers, customer)}`
        new URL(window.location.replace(`index.html?${parametrx}`))
    }
    celldelete.appendChild(divcellCopy);
    /*
    onmouseover="bigImg(this)" onmouseout="normalImg(this)"
    let divcelldelete = document.createElement("div");
    divcelldelete.className = "deleteFromTd"
    divcelldelete.innerHTML = '<img id="iconDelete"class="icon-delete" src="images/icon.png"/>';

    divcelldelete.onclick = () => {
        if (customer.protect === "unlock") {
            if (confirm("Are you sure you want to delete")) {
                customers = deleteCustomer(customers, customer.number)
                if (currentPage * rowsPage + 1 > customers.length) {
                    currentPage -= 1;
                }
            }
        }
        render(customers)
        localStorage.setItem('Local', JSON.stringify(customers));
    };
  
    celldelete.appendChild(divcelldelete);
      */
    let divEdit = document.createElement("div");
    divEdit.innerHTML = '<img class="edit" id="edit" src="images/edit.png" />';
    divEdit.onclick = () => {
        if (customer.protect === "unlock") {
            var parametr = `function=editCustomer&index=${editCustomers(customers, customer)}`
            new URL(window.location.replace(`index.html?${parametr}`))
        }
    }
    divEdit.id = "editDiv";
    celldelete.appendChild(divEdit)
    row.id = customer.number
    return row;
};

function searchCustomers(customersSearch) {
    let search = searchElement.value.toLowerCase();
    let filtered = customersSearch.filter((customer) => {
        return (customer.name.toLowerCase().includes(search) || customer.description.toLowerCase().includes(search));
    });
    return filtered
};
table.addEventListener("click", () => {
    sortStyle.style.display = "none"
})

sortStyle.addEventListener("click", () => {
    console.log("ds")
    sortStyle.style.display = "none"

})

let checkedAllTrue = document.getElementById("checkedAll")
let checkbox = document.getElementById("checkbox")

table.addEventListener("click", (e) => {
    if (e.target.id == "checkbox" && e.target.checked == true) {
        let rowCheched = e.target.closest("tr")
        customers.forEach((customer) => {
            if (customer.number == rowCheched.id) {
                if (customer.select == "unchecked") {
                    customer.select = "checked"
                    iconPrinter.classList.remove("none")
                    iconTrash.classList.remove("none")
                    console.log("true")
                    if (customers.every((customer) => customer.select === "checked")) {
                        console.log("e")
                        checkedAllTrue.checked = true
                    }
                }
                render(customers)
            }
        })
    }
    if (e.target.id == "checkbox" && e.target.checked == false) {
        let rowCheched = e.target.closest("tr")
        customers.forEach((customer) => {
            if (customer.number == rowCheched.id) {
                if (customer.select == "checked") {
                    customer.select = "unchecked"
                    if (customers.every((customer) => customer.select === "unchecked")) {
                        iconPrinter.classList.add("none")
                        iconTrash.classList.add("none")
                    }
                    if (customers.some((customer) => customer.select === "unchecked")) {
                        console.log("e")
                        checkedAllTrue.checked = false

                    }
                    console.log("false")
                }
            }
        })
        render(customers)
    }
});


checkedAllTrue.addEventListener("click", (e) => {
    if (e.target.id == "checkedAll" && e.target.checked == true) {
        customers.forEach((customer) => {
            customer.select = "checked"
            if (customer.select == "checked") {
                iconPrinter.classList.remove("none")
                iconTrash.classList.remove("none")
            }
        })
        render(customers)
    }
    if (e.target.id == "checkedAll" && e.target.checked == false) {
        customers.forEach((customer) => {
            customer.select = "unchecked"
            if (customer.select == "unchecked") {
                iconPrinter.classList.add("none")
                iconTrash.classList.add("none")
            }
        })
        render(customers)
    }
});

function countaActiveCustomers(array) {
    lengthStatuts.innerText = array.length
    var activeCustomers = []
    for (var i = 0; i < array.length; i++) {
        if (array[i].status == "ACTIVE") {
            activeCustomers.push(array[i])
        }
    };
    lengthArray.innerText = activeCustomers.length
};

function render(customersRender) {
    table.innerHTML = ""
    const searchedCustomers = searchCustomers(customersRender)
    const sortedCustomersName = sortarrayName(searchedCustomers, orderName)
    sortedCustomers = sortStauts(sortedCustomersName, statutsOrder)
    const rendeNextPage = (sortedCustomers.slice(currentPage * rowsPage, (currentPage + 1) * rowsPage))
    countaActiveCustomers(customersRender)
    rendeNextPage.forEach((customer) => {
        const row = creatElement(customer)
        if (customer.protect == "lock") {
            row.classList.add("padlocked-td")
            row.classList.remove("tdClass")
        }
        if (customer.protect == "unlock") {
            row.classList.remove("padlocked-td")
            row.classList.add("tdClass")
        }
        if (customer.select == "checked") {
            row.classList.add("padlocked-td")
            row.classList.remove("tdClass")
        }
        if (customer.borderRow === "highlight") {
            myFunction("Customer Submitted Successful")
            row.classList.add("tdClasss")
            setTimeout(function() {
                row.classList.remove("tdClasss")
            }, 5000);
            customer.borderRow = ""
            localStorage.setItem('Local', JSON.stringify(customers));
        }
        if (customer.borderRow === "highlightUpdate") {
            row.classList.add("tdClasss")
            setTimeout(function() {
                row.classList.remove("tdClasss")
            }, 5000);
            customer.borderRow = ""
            localStorage.setItem('Local', JSON.stringify(customers));
            myFunction("Customer Updetted Successful")
        }
        table.appendChild(row)
    })
    if (rendeNextPage.length == 0) {
        displayRows.innerHTML = "0 - of 0"
        myFunction("add customer")
    } else {
        displayRows.innerHTML = `${ currentPage * rowsPage + 1 } - ${(rendeNextPage.length - rowsPage) + (currentPage + 1) * rowsPage }of ${ searchedCustomers.length } `;
    }
};
searchElement.addEventListener("keyup", () => {
    render(customers)
});
select.addEventListener("change", (event) => {
    rowsPage = event.target.value
    render(customers)
});

nextPage.addEventListener("click", () => {
    var calcul = Math.ceil(customers.length / rowsPage)
    if (currentPage + 1 < calcul) {
        currentPage += 1
    }
    render(customers)
});

previousPage.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage -= 1;
    }
    render(customers)
});

function getFromLocal() {
    if (localStorage.getItem('Local') == null) {
        let customers = []
        localStorage.setItem('Local', JSON.stringify(customers));
    }
    if (localStorage.getItem('Local') !== null) {
        customers = JSON.parse(localStorage.getItem('Local'))
    }
};
let icon = document.getElementById("iconAdd")
icon.addEventListener("click", () => {
    new URL(window.location.replace("index.html?function=addCustomr"))
});

function editCustomers(arrayCustomer, editCustomrObj) {
    return arrayCustomer.indexOf(editCustomrObj)
}
let iconCopy = document.getElementById("iconCopy")
let iconPrinter = document.getElementById("iconPrinter")
let iconTrash = document.getElementById("iconTrash")
var arrayChecked = []
let checkedAll = document.getElementById("checkedAll")

let copyArray = customers.slice()
iconTrash.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete")) {
        copyArray.forEach((customer) => {
            if (customer.protect === "unlock" && customer.select === "checked") {
                let indexChecked = customers.indexOf(customer)
                customers.splice(indexChecked, 1)
                if (currentPage * rowsPage + 1 > customers.length) {
                    currentPage -= 1;
                }
                render(customers)
                localStorage.setItem('Local', JSON.stringify(customers));
                checkedAll.checked = false;
                iconTrash.classList.add("none")
                iconPrinter.classList.add("none")
            }
        })
    }
});

sort.addEventListener("click", () => {
    sortStyle.classList.add("true")
    sortStyle.style.display = "grid"
});

function sortarrayName(sortCustomersName, order) {
    sortCustomersName.sort((a, b) => {
        if (order === "ascending") {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1
            }
            return 0
        }
        if (order === "descending") {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1
            }
            return 0
        }
    });
    return sortCustomersName
};

function sortStauts(sortCustomersStatus, order) {
    sortCustomersStatus.sort((a, b) => {
        if (order === "ascending") {
            if (a.status < b.status) {
                return -1
            }
            return 0
        }
        if (order === "descending") {
            if (a.status > b.status) {
                return -1
            }
            return 0
        }
    });
    return sortCustomersStatus
};
let activeSort = document.getElementById("activeSort")
let inactiveSort = document.getElementById("inactiveSort")
let defaultSort = document.getElementById("defaultSort")

let descending = document.getElementById("descending")
let ascending = document.getElementById("ascending")
let defaultName = document.getElementById("undefined")
defaultSort.classList.add("click");
defaultName.classList.add("click")

sortStyle.addEventListener("click", (e) => {
    if (e.target.id == "activeSort") {
        statutsOrder = "ascending";
        arrowUpStatuts.className = "click-arrow";
        arrowDownStatuts.className = "arrow-down";
        activeSort.classList.add("click")
        defaultSort.classList.remove("click")
        inactiveSort.classList.remove("click")
    }
    if (e.target.id == "inactiveSort") {
        statutsOrder = "descending";
        arrowDownStatuts.className = "click-arrow-down";
        arrowUpStatuts.className = "arrow-up";
        activeSort.classList.remove("click")
        inactiveSort.classList.add("click")
        defaultSort.classList.remove("click")
    }
    if (e.target.id == "defaultSort") {
        statutsOrder = "undefined";
        arrowUpStatuts.className = "arrow-up";
        arrowDownStatuts.className = "arrow-down";
        activeSort.classList.remove("click")
        defaultSort.classList.add("click")
        inactiveSort.classList.remove("click")
    }
    if (e.target.id == "descending") {
        orderName = "ascending";
        arrowUp.className = "click-arrow";
        arrowDown.className = "arrow-down";
        descending.classList.add("click")
        ascending.classList.remove("click")
        defaultName.classList.remove("click")
    }
    if (e.target.id == "ascending") {
        orderName = "descending";
        arrowDown.className = "click-arrow-down";
        arrowUp.className = "arrow-up";
        descending.classList.remove("click")
        ascending.classList.add("click")
        defaultName.classList.remove("click")
    }
    if (e.target.id == "undefined") {
        orderName = "undefined";
        arrowUp.className = "arrow-up";
        arrowDown.className = "arrow-down";
        descending.classList.remove("click")
        defaultName.classList.add("click")
        ascending.classList.remove("click")
    }
    render(customers)
});

iconPrinter.addEventListener("click", () => {
    checkedAll.checked = false;
    let olpl = []
    customers.forEach((customer) => {
        if (customer.select == "checked") {
            olpl.push(customer)
            console.log(olpl)
        }
    })
    table.innerHTML = ""
    olpl.forEach((customer) => {
        const row = creatElement(customer)
        table.appendChild(row)
    });
    // iconTrash.classList.add("none")
    // iconPrinter.classList.add("none")
    window.print()
    render(customers)

});
/*
window.onclick = function() {
    if (sortStyle.classList == "true") {
        sortStyle.style.display = "none"
    }
}
*/
function pluscustomer(arrayCustomer, editCustomrObj) {
    return arrayCustomer.indexOf(editCustomrObj)
}

function duplicateCustomrers(orignalCustomer, customer) {
    return orignalCustomer.indexOf(customer)
}
table.addEventListener("click", (e) => {
    if (e.target.id == "unlocked") {
        let row = e.target.closest("tr")
        customers.forEach((customer) => {
            if (customer.protect == "unlock") {
                if (customer.number == row.id) {
                    customer.protect = "lock"
                    render(customers)
                    localStorage.setItem('Local', JSON.stringify(customers));
                }
            }
        })
    };
    if (e.target.id == "lock") {
        let row = e.target.closest("tr")
        customers.forEach((customer) => {
            if (customer.protect == "lock") {
                if (customer.number == row.id) {
                    customer.protect = "unlock"
                    render(customers)
                    localStorage.setItem('Local', JSON.stringify(customers));
                }
            }
        })
    }
});
render(customers);