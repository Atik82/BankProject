// login validation form start
let loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', () => {
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let loginArea = document.querySelector('#loginArea');
    let clintArea = document.querySelector('#clintArea');

    if (email == "" && password == "") {
        alert("Please Enter your Email and password : ")
    } else {
        loginArea.style.display = "none";
        clintArea.style.display = "block";
    };
})


//deposite area-----

let depositBtn = document.querySelector('#depositBtn');

depositBtn.addEventListener('click', () => {
    let mainBalance = document.querySelector('#mainBalance').innerHTML;
    let depositAmount = document.querySelector('#depositAmount').innerHTML;
    let depositInput = document.querySelector('#depositInput').value;

    if ((isNaN(depositAmount) || depositInput == '')) {
        alert('Enter your amount');
    } else {
        document.querySelector('#mainBalance').innerHTML = parseFloat(mainBalance) + parseFloat(depositInput);
        document.querySelector('#depositAmount').innerHTML = parseFloat(depositInput) + parseFloat(depositAmount);
    }
})


//withdrow area--------
let withdrowBtn = document.querySelector('#withdrowBtn');

withdrowBtn.addEventListener('click', () => {
    let mainBalance = document.querySelector('#mainBalance').innerHTML;
    let withdrowAmount = document.querySelector('#withdrowAmount').innerHTML;
    let withdrowInput = document.querySelector('#withdrowInput').value;

    if ((isNaN(withdrowAmount) || withdrowInput == '')) {
        alert('Enter your amount');
    } else {
        document.querySelector('#mainBalance').innerHTML = parseFloat(mainBalance) - parseFloat(withdrowInput);
        document.querySelector('#withdrowAmount').innerHTML = parseFloat(withdrowInput) + parseFloat(withdrowAmount);
    }
})











//  $ means quary selector
// function $(selector) {
//     return document.querySelector(selector);
// }

// // login validation form start

// function loginBtn() {

//     let email = $("#email").value;
//     let password = $("#pass").value;
//     if (email == "" && password == "") {
//         alert("Please Enter your Email and password : ")
//     } else {

//         let login = $("#loginArea");
//         login.style.display = "none";

//         let user = $("#clintArea");
//         user.style.display = "block";

//     };
// };
// // login validation form end


// //deposite area

// function depositeBtn() {

//     let previous = $("#depositeValue").innerText;
//     previous = parseFloat(previous);
//     let diposit = $("#depositeEnter").value;
//     diposit = parseFloat(diposit);

//     if (isNaN(diposit) || diposit == "") {
//         alert("please enter Number Value only ")

//     } else {
//         let total = diposit + previous;
//         $("#depositeValue").innerText = total;


//         let mainBalance = $("#mainBalance").innerText;
//         mainBalance = parseFloat(mainBalance);
//         $("#mainBalance").innerText = diposit + mainBalance;
//     }
// }

// // withdro area

// function widrowBtn() {
//     let previousWidrow = $("#previousWidrow").innerText;
//     previousWidrow = parseFloat(previousWidrow)

//     let widrow = $("#withdraw").value;
//     widrow = parseFloat(widrow);

//     if (isNaN(widrow) || widrow == "") {
//         alert("please enter Number Value only ")
//     } else {

//         let totalWidrow = previousWidrow + widrow;
//         $("#previousWidrow").innerText = totalWidrow;


//         let mainBalance = $("#mainBalance").innerText;
//         mainBalance = parseFloat(mainBalance)

//         $("#mainBalance").innerText = mainBalance - widrow;

//     }
// }