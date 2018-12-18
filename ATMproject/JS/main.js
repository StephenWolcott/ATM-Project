var card = 1;
var pin = 2;
var balance = 1000;
var cash = 1000;
var recieved = 0;



function addNumber(element){
    document.getElementById('mvar').value = document.getElementById('mvar').value+element.value;
    document.getElementById('mvar').innerText = '';
}

function addNumberTwo(element){
    document.getElementById('mvar2').value = document.getElementById('mvar2').value+element.value;
    document.getElementById('mvar2').innerText = '';
}

function addNumberThree(element){
    document.getElementById('mvar3').value = document.getElementById('mvar3').value+element.value;
    document.getElementById('mvar3').innerText = '';
}

function addNumberFour(element){
    document.getElementById('mvar4').value = document.getElementById('mvar4').value+element.value;
    document.getElementById('mvar4').innerText = '';
}

function begin(){
    welcomeScreen.style.display = "none";
    beginButton.style.display = "none";

    enterCard.style.display = "inline-block";
    cardScreen.style.display = "inline-block";
    
}

function cardVerify(){
    document.getElementById('mvar2').value = '';
    document.getElementById('mvar3').value = '';
    document.getElementById('mvar4').value = '';

    withdrawlScreen.style.display = "none";
    withdrawlSuccessScreen.style.display = "none";
    depositScreen.style.display = "none";
    depositSuccessScreen.style.display = "none";
    fastCashSuccessScreen.style.display = "none";

    cardnumber = document.getElementById("mvar").value;

    if (card == cardnumber){
        
        pinVerify();

    } else {
        cardVerify()
    }
}

function pinVerify(){

    document.getElementById("mvar").textContent = "";
    
    cardScreen.style.display = "none";

    pinnumber = document.getElementById("mvar2").value;

    pinScreen.style.display = "inline-block";

    if (pinnumber == pin){
        mainMenuScreen();

    } else {
        pinVerify()
    }
}

function mainMenuScreen(){
    document.getElementById('mvar2').value = '';
    document.getElementById('mvar3').value = '';
    document.getElementById('mvar4').value = '';

    pinScreen.style.display = "none";
    enterPin.style.display = "none";
    accountScreen.style.display = "none";
    withdrawlScreen.style.display = "none";
    withdrawlSuccessScreen.style.display = "none";
    depositScreen.style.display = "none";
    depositSuccessScreen.style.display = "none";
    fastCashScreen.style.display = "none";
    fastCashSuccessScreen.style.display = "none";


    menuScreen.style.display = "inline-block";
    mainMenu.style.display ="inline-block";
}

function accountView(){
    var displayOne = document.getElementById("accountBalance");

    menuScreen.style.display = "none";
    mainMenu.style.display = "none";

    accountScreen.style.display = "inline-block";

    displayOne.innerHTML = "your current account balance is $" + balance + "." ;
}

function withdrawlView(){

    menuScreen.style.display = "none";
    mainMenu.style.display = "none";

    withdrawlScreen.style.display = "inline-block";

}

function withdrawl(){

    var displayTwo = document.getElementById("newWithdrawlBalance");

    var withdrawlAmount = document.getElementById("mvar3").value;

    var afterWithdrawl = balance -+ withdrawlAmount;

    if (afterWithdrawl >= 0) {
        withdrawlScreen.style.display = "none";

        withdrawlSuccessScreen.style.display = "inline-block";

        displayTwo.innerHTML = "your withdrawl of $" + withdrawlAmount + " brings your account balance to $" + afterWithdrawl + ".";

        balance = afterWithdrawl;

        recieved = withdrawlAmount
    }else {
        withdrawlView();
        error.innerHTML = "Insufficient funds."

    }
}

function depositView(){

    menuScreen.style.display = "none";
    mainMenu.style.display = "none";

    depositScreen.style.display = "inline-block";

}

function deposit(){

    var displayThree = document.getElementById("newDepositBalance");

    var depositAmount = document.getElementById("mvar4").value;

    var afterDeposit = +balance + + depositAmount;

    if (depositAmount <= cash) {
        depositScreen.style.display = "none";

        depositSuccessScreen.style.display = "inline-block";

        displayThree.innerHTML = "your deposit of $" + depositAmount + " brings your account balance to $" + afterDeposit + ".";

        balance = afterDeposit;

        cash = cash - depositAmount

    } else {
        
        errorThree.innerHTML = "Insufficient funds.";
        depositView();
    

    }
    
    // depositScreen.style.display = "none";

    // depositSuccessScreen.style.display = "inline-block";

    // displayThree.innerHTML = "your deposit of $" + depositAmount + "  brings your account balance to $" + afterDeposit + ".";

    // balance = afterDeposit;
}

function fastCashView(){

    menuScreen.style.display = "none";
    mainMenu.style.display = "none";

    fastCashScreen.style.display = "inline-block";

}

function fastCashOne(){

    var displayFour = document.getElementById("newFastCashBalance");

    var afterFastCash = balance -+ 20;

    if (afterFastCash >= 0) {
        fastCashScreen.style.display = "none";

        fastCashSuccessScreen.style.display = "inline-block";

        newFastCashBalance.style.display = "inline-block";

        displayFour.innerHTML = "your fast cash withdrawl of $20 brings your account balance to $" + afterFastCash + ".";

        balance = afterFastCash;

        recieved = +recieved + 20
    }else {
        fastCashView();
        errorTwo.innerHTML = "Insufficient funds."
    }
}

function fastCashTwo(){


    var displayFour = document.getElementById("newFastCashBalance");

    var afterFastCash = balance -+ 40;

    if (afterFastCash >= 0) {
        fastCashScreen.style.display = "none";

        fastCashSuccessScreen.style.display = "inline-block";

        displayFour.innerHTML = "your fast cash withdrawl of $40 brings your account balance to $" + afterFastCash + ".";

        balance = afterFastCash;

        recieved = +recieved + 40
    }else {
        fastCashView();
        errorTwo.innerHTML = "Insufficient funds."
    }
}

function fastCashThree(){

    var displayFour = document.getElementById("newFastCashBalance");

    var afterFastCash = balance -+ 60;

    if (afterFastCash >= 0) {
        fastCashScreen.style.display = "none";

        fastCashSuccessScreen.style.display = "inline-block";

        displayFour.innerHTML = "your fast cash withdrawl of $60 brings your account balance to $" + afterFastCash + ".";

        balance = afterFastCash;

        recieved = +recieved + 60
    }else {
        fastCashView();
        errorTwo.innerHTML = "Insufficient funds."
    }
}

function fastCashFour(){

    var displayFour = document.getElementById("newFastCashBalance");

    var afterFastCash = balance -+ 80;

    if (afterFastCash >= 0) {
        fastCashScreen.style.display = "none";

        fastCashSuccessScreen.style.display = "inline-block";

        displayFour.innerHTML = "your fast cash withdrawl of $80 brings your account balance to $" + afterFastCash + ".";

        balance = afterFastCash;

        recieved = +recieved + 80
    }else {
        fastCashView();
        errorTwo.innerHTML = "Insufficient funds."
    }
}

function fastCashFive(){

    var displayFour = document.getElementById("newFastCashBalance");

    var afterFastCash = balance -+ 100;

    if (afterFastCash >= 0) {
        fastCashScreen.style.display = "none";

        fastCashSuccessScreen.style.display = "inline-block";

        displayFour.innerHTML = "Your fast cash withdrawl of $100 brings your account balance to $" + afterFastCash + "";

        balance = afterFastCash;

        recieved = +recieved + 100
    }else {
        fastCashView();
        errorTwo.innerHTML = "Insufficient funds."
    }
}

function logOutView(){
    menuScreen.style.display = "none";
    
    logOutScreen.style.display = "inline-block"

    var displayFive = document.getElementById("currentBalance");
    var displaySix = document.getElementById("cashReceived");

    displayFive.innerHTML = "Current Acount Balance: $" + balance + "";
    displaySix.innerHTML = "Cash Received: $" + recieved + "";

    
}

function logOut(){
    location.reload();
}

