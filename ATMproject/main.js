var card = 1;
var pin = 2;
var account = 1;
var balance = 1000;
var showCard = document.getElementById("cardScreen");




function addNumber(element){
    document.getElementById('mvar').value = document.getElementById('mvar').value+element.value;
};

function addNumberTwo(element){
    document.getElementById('mvar2').value = document.getElementById('mvar2').value+element.value;
};

function cardVerify(){

    showCard.innerHTML = "<div>welcome! please enter your card number</div>";
    
    cardnumber = document.getElementById("mvar").value;

    if (cardnumber == card){
        console.log('dab')
        
        pinVerify();

    } else {
        cardVerify()
    };
};

function pinVerify(){
    
    showCard.style.display = "none";

    pinnumber = document.getElementById("mvar2").value;

    pinScreen.style.display = "inline-block";

    if (pinnumber == pin){
        mainMenuScreen();

    } else {
        console.log(pin)
        console.log(pinnumber)
        console.log('nah')
    };
};

function mainMenuScreen(){

    pinScreen.style.display = "none";
    enterPin.style.display = "none";

    menuScreen.style.display = "inline-block";
};

function accountView(){
    console.log("yeet");
    var displaythis = document.getElementById("accountBalance");

    menuScreen.style.display = "none";
    mainMenu.style.display = "none";

    accountScreen.style.display = "inline-block";

    displaythis.innerHTML = "your current account balance is $" + balance + "." ;

