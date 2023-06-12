document.getElementById("logIn").onclick = addElement;
function addElement() {
    var newDiv = document.createElement("div");
    newDiv.classList.add("logMenu");
    newDiv.innerHTML = "\n    <p>Text </p>\n    <div id=\"regisClose\" onclick=\"newDiv.handleClear()\">\n      <img src=\"ts/cross.svg\" alt=\"a\">\n    </div>\n  ";
    newDiv.style.visibility = 'visible';
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
    document.getElementById("regisClose").onclick = handleClear;
    function handleClear() {
        newDiv.innerHTML = '';
        newDiv.style.visibility = 'hidden';
    }
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
