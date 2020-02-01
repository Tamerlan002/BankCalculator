"use strict"

// taken inputs
var chooseTraffic = document.querySelector("#chooseTraffic")
var carValue = document.querySelector("#carValue");
var deposit = document.querySelector("#deposit");
var rentAmount = document.querySelector("#rentAmount");
var duration = document.querySelector("#duration");
var percentPerYear = document.querySelector("#percentPerYear");
var commissionAmount = document.querySelector("#commissionAmount");
var insuranceAmount = document.querySelector("#insuranceAmount");
var DYP = document.querySelector("#DYP");

//Setting inputs

// Check validity for car value
function checkValidation(){
    var isnum = /^\d+$/.test(carValue.value);
    if(isnum != true && carValue.value.length > 0){
        alert("Sadəcə rəqəm daxil edin")
        carValue.value = "";
        return;
    }
}

function setElements() {
    if (carValue.value == "") {
        alert("Avtomobil dəyəri boş ola bilməz")
        return;
    }
    else {
        if (carValue.value < 5000) {
            alert("Dəyər 5000-dən aşağı ola bilməz");
            return;
        }
        else {
            if (deposit.value == "" || deposit.value == 0) {
                var depositAmount = carValue.value * 0.3;
                deposit.value = depositAmount;
            }
            else {
                checkDeposit();
            }

            rentAmount.value = carValue.value - depositAmount
            if (chooseTraffic.selectedIndex == "0") {
                calculateRentWithLising()
            }
            else {
                calculateRentWithFactoring();
            }
        }
    }
}

//Checking deposite if it is more than 30% of car value


function checkDeposit() {

    if(carValue.value == "" || carValue.value == 0){
        alert("Avtomobil dəyəri boş ola bilməz");
        deposit.value = "";
        return;
    }
    else if (deposit.value > carValue.value * 0.3) {
        alert("İlkin ödəniş ümumi məbləğin 30 faizindən çox ola bilməz");
        deposit.value = carValue.value * 0.3;
        setElements();
    }
    else {
        if (chooseTraffic.selectedIndex == '0') {
            calculateRentWithLising();
        }
        else {
            calculateRentWithFactoring();
        }
    }
}



//Setting inputs affected by duration change

function durationChanged(percentPYear, commission) {
    percentPerYear.value = percentPYear + "%";
    commissionAmount.value = commission
        * rentAmount.value;
}

//Change values for Lising here

function calculateRentWithLising() {
    rentAmount.value = carValue.value - deposit.value;
    if (duration.selectedIndex == '0') {
        durationChanged(19, 0.01);
        insuranceAmount.value = carValue.value * 0.04
    }
    if (duration.selectedIndex == '1') {
        durationChanged(21, 0.01);
        insuranceAmount.value = carValue.value * 0.05
    }
    if (duration.selectedIndex == '2') {
        durationChanged(22, 0.02);
        insuranceAmount.value = carValue.value * 0.065
    }
}

//Change values for factoring here

function calculateRentWithFactoring() {
    rentAmount.value = carValue.value - deposit.value;
    if (duration.selectedIndex == '0') {
        durationChanged(22, 0.02);
        insuranceAmount.value = carValue.value * 0.04
    }
    if (duration.selectedIndex == '1') {
        durationChanged(24, 0.02);
        insuranceAmount.value = carValue.value * 0.05
    }
    if (duration.selectedIndex == '2') {
        durationChanged(26, 0.03);
        insuranceAmount.value = carValue.value * 0.065
    }
}



//NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR NEW CAR

// taken inputs
var chooseTrafficNew = document.querySelector("#chooseTrafficNew")
var carValueNew = document.querySelector("#carValueNew");
var depositNew = document.querySelector("#depositNew");
var rentAmountNew = document.querySelector("#rentAmountNew");
var durationNew = document.querySelector("#durationNew");
var percentPerYearNew = document.querySelector("#percentPerYearNew");
var commissionAmountNew = document.querySelector("#commissionAmountNew");
var insuranceAmountNew = document.querySelector("#insuranceAmountNew");
var DYPNew = document.querySelector("#DYPNew");

//Setting inputs

function setElementsNew() {
    if (carValueNew.value == "") {
        alert("Avtomobil dəyəri boş ola bilməz")
        return;
    }
    else {
        if (carValueNew.value < 5000) {
            alert("Dəyər 5000-dən aşağı ola bilməz");
            return;
        }
        else {
            if (depositNew.value == "" || depositNew.value == 0) {
                var depositAmount = carValueNew.value * 0.3;
                depositNew.value = depositAmount;
            }
            else {
                checkDepositNew();
            }

            rentAmountNew.value = carValueNew.value - depositAmount
            if (chooseTrafficNew.selectedIndex == "0") {
                calculateRentWithLisingNew()
            }
            else {
                calculateRentWithFactoringNew();
            }
        }

    }
}

//Checking deposite if it is more than 25% of car value


function checkDepositNew() {
    if(carValueNew.value == "" || carValueNew.value == 0){
        alert("Avtomobil dəyəri boş ola bilməz");
        depositNew.value = "";
        return;
    }
    else if (depositNew.value > carValueNew.value * 0.3) {
        alert("İlkin ödəniş ümumi məbləğin 30 faizindən çox ola bilməz");
        depositNew.value = carValueNew.value * 0.3;
        setElementsNew();
    }
    else {
        if (chooseTrafficNew.selectedIndex == '0') {
            calculateRentWithLisingNew();
        }
        else {
            calculateRentWithFactoringNew();
        }
    }
}

//Setting inputs affected by duration change

function durationChangedNew(percentPYear, commission) {
    percentPerYearNew.value = percentPYear + "%";
    commissionAmountNew.value = commission
        * rentAmountNew.value;
}

//Change values for Lising here

function calculateRentWithLisingNew() {
    rentAmountNew.value = carValueNew.value - depositNew.value;
    if (durationNew.selectedIndex == '0') {
        durationChangedNew(18, 0.01);
        insuranceAmountNew.value = carValueNew.value * 0.03
    }
    if (durationNew.selectedIndex == '1') {
        durationChangedNew(19, 0.015);
        insuranceAmountNew.value = carValueNew.value * 0.04
    }
    if (durationNew.selectedIndex == '2') {
        durationChangedNew(21, 0.02);
        insuranceAmountNew.value = carValueNew.value * 0.05
    }
}

//Change values for factoring here

function calculateRentWithFactoringNew() {
    rentAmountNew.value = carValueNew.value - depositNew.value;
    if (durationNew.selectedIndex == '0') {
        durationChangedNew(19, 0.01);
        insuranceAmountNew.value = carValueNew.value * 0.03
    }
    if (durationNew.selectedIndex == '1') {
        durationChangedNew(20, 0.01);
        insuranceAmountNew.value = carValueNew.value * 0.04
    }
    if (durationNew.selectedIndex == '2') {
        durationChangedNew(23, 0.01);
        insuranceAmountNew.value = carValueNew.value * 0.05
    }
}



//cleanInputs

function cleanInputs(){
    var allInputs = document.querySelectorAll("input");
    console.log(allInputs);
    allInputs.forEach(element => {
    element.value = "";
    });
}


var oldCarButton = document.querySelector("#oldCarToggle");
var newCarButton = document.querySelector("#newCarToggle");
var oldCarSection = document.querySelector(".oldCar")
var newCarSection = document.querySelector(".newCar")

function openOldCar(){
    newCarButton.classList.remove("btn-success")
    newCarButton.classList.add("btn-secondary")
    oldCarButton.classList.add("btn-success")
    oldCarButton.classList.remove("btn-secondary")
    newCarSection.classList.add("d-none");
    oldCarSection.classList.remove("d-none")
}

function openNewCar(){
    oldCarButton.classList.remove("btn-success")
    oldCarButton.classList.add("btn-secondary")
    newCarButton.classList.add("btn-success")
    newCarButton.classList.remove("btn-secondary")
    newCarSection.classList.remove("d-none");
    oldCarSection.classList.add("d-none")
}