//WEBULATOR 4 SCRIPT


function calcFunc() {


    var numb1 = document.getElementById('num1').value;

    var numb2 = document.getElementById('num2').value;

    var currentOp = document.getElementById('selectOpr').value;

    var result = Number(numb1) + Number(numb2);

    switch (currentOp) {
        case "Addition":
            result = Number(numb1) + Number(numb2);
            break;
        case "Subtraction":
            result = Number(numb1) - Number(numb2);
            break;
        case "Multiplication":
            result = Number(numb1) * Number(numb2);
            break;
        case "Division":
            result = Number(numb1) / Number(numb2);
            break;

    }

    document.getElementById('rsltTxt').innerHTML = result;

}

function clearFunc() {
    document.getElementById('rsltTxt').innerHTML = "RESULT APPEARS HERE";

    document.getElementById('num1').value = " ";

    document.getElementById('num2').value = " "
}

function displayOpr() {
    var oprSelected = document.getElementById('selectOpr').value;

    var dsplayOpr = document.getElementById('dsplayOprId').innerHTML = "PLUS";

    switch (oprSelected) {
        case "Addition":
            dsplayOpr = document.getElementById('dsplayOprId').innerHTML = "PLUS";
            /* document.getElementById('dsplayOprId').style.color = "black"; */
            break;
        case "Subtraction":
            dsplayOpr = document.getElementById('dsplayOprId').innerHTML = "MINUS";
            /*   document.getElementById('dsplayOprId').style.color = "black"; */
            break;
        case "Multiplication":
            dsplayOpr = document.getElementById('dsplayOprId').innerHTML = "Multiplied By";
            /*  document.getElementById('dsplayOprId').style.color = "black"; */
            break;
        case "Division":
            dsplayOpr = document.getElementById('dsplayOprId').innerHTML = "Divided by";
            /*  document.getElementById('dsplayOprId').style.color = "black"; */
            break;
    }
}

function nanCheck() {

    var nanError = document.getElementById('rsltTxt').innerHTML;

    if (nanError == "NaN") {
        alert("Numbers only. Susy baka !");
        clearFunc();
    }
}

/*  function changeTheme() {
                var checkCheck = document.getElementById('darkCheck').checked;
                if(checkCheck == true) {
                    document.getElementById('styleLink').setAttribute('href', 'stylesDark.css');
                } else {
                    document.getElementById('styleLink').setAttribute('href', 'styles.css');
                }
            }
            */

function themeFunc() {

    var currentTheme = document.getElementById('themeSelector').value;

    switch (currentTheme) {
        case "Default":
            document.getElementById('styleLink').setAttribute('href', 'Styles/styles.css');
            break;
        case "Dark":
            document.getElementById('styleLink').setAttribute('href', 'Styles/stylesDark.css');
            break;
        case "Jungle":
            document.getElementById('styleLink').setAttribute('href', 'Styles/stylesJungle.css');
            break;
        case "Retro":
            document.getElementById('styleLink').setAttribute('href', 'Styles/stylesRetro.css');
            break;
        case "Futuristic":
            document.getElementById('styleLink').setAttribute('href', 'Styles/stylesFuturistic.css');
            break;
    }
}