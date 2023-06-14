document.getElementById("logIn").onclick = addElement;
function addElement() {
    var newDiv = document.createElement("div");
    newDiv.classList.add("logMenu");
    newDiv.innerHTML = "\n    <div id=\"regisClose\" onclick=\"newDiv.handleClear()\">\n      <img src=\"ts/cross.svg\" alt=\"a\">\n    </div>\n    <div id=\"regisMenu\">\n    <div id=\"regisMenuTop\"></div>\n      <form action=\"\" method=\"post\">\n        <p>Enter your name</p>\n        <div class=\"input-container\">\n          <input type=\"text\" id=\"input\" required=\"\">\n          <label for=\"input\" class=\"label\">Enter name</label>\n        <div class=\"underline\"></div>\n        </div>\n        <p>Enter your email</p>\n        <div class=\"input-container\">\n          <input type=\"email\" id=\"input\" required=\"\">\n          <label for=\"input\" class=\"label\">Enter email</label>\n        <div class=\"underline\"></div>\n        </div>\n        <p>Enter your password</p>\n        <div class=\"input-container\">\n          <input type=\"password\" id=\"parol\" required=\"\">\n          <label for=\"input\" class=\"label\">Enter password</label>\n        <div class=\"underline\"></div>\n        </div>\n        \n        <p>Re-enter your password</p>\n        <div class=\"input-container\">\n          <input type=\"password\" id=\"input\" required id=\"confirm-password\" value=\"\">\n          <label for=\"input\" class=\"label\">Re-enter password</label>\n        <div class=\"underline\"></div>\n        </div>\n        <input type=\"submit\" id=\"submit\">\n      </form>\n      <button id=\"activePassword\">Show password</button>\n    </div>\n    \n  ";
    newDiv.style.visibility = 'visible';
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
    document.getElementById("regisClose").onclick = handleClear;
    function handleClear() {
        newDiv.innerHTML = '';
        newDiv.style.visibility = 'hidden';
    }
    var check = document.getElementById("activePassword");
    var parol = document.getElementById("parol");
    check.onclick = function show() {
        if (parol.getAttribute('type') == 'password') {
            parol.removeAttribute('type');
            parol.setAttribute('type', 'text');
            check.style.backgroundColor = "rgb(255, 70, 70)";
        }
        else {
            parol.removeAttribute('type');
            parol.setAttribute('type', 'password');
            check.style.backgroundColor = "rgb(61, 170, 61)";
        }
    };
    // let validInput: any = document.getElementById("submit")
    // function validateForm(event: any):void {
    //   event.preventDefault();
    //   if (password.value !== confirmPassword.value) {
    //     alert("Вы ввели неправильный повторный пароль.");
    //   } else {
    //     alert("Вы успешно зареегестрированы")
    //   }
    // }
}
var activeMenu = document.getElementById("menu");
activeMenu.onclick = function () {
    var blockMenu = document.getElementById("menuTable");
    var active = activeMenu.checked;
    if (active == true) {
        blockMenu.style.transform = 'translate(320px, 0)';
        blockMenu.style.transition = "0.4s ease-in-out";
    }
    if (active !== true) {
        blockMenu.style.transform = 'translate(-302px, 0)';
        blockMenu.style.transition = "0.4s ease-in-out";
    }
};
