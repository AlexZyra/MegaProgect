document.getElementById("logIn").onclick = addElement;
function addElement() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("logMenu");
  newDiv.innerHTML = `
    <p>Text </p>
    <div id="regisClose" onclick="newDiv.handleClear()">
      <img src="ts/cross.svg" alt="a">
    </div>
  `;
  newDiv.style.visibility = 'visible';
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  document.getElementById("regisClose").onclick = handleClear;
  function handleClear(){
    newDiv.innerHTML = '';
    newDiv.style.visibility = 'hidden';
  }

}


let activeMenu: any = document.getElementById("menu");
activeMenu.onclick = function () {
  let blockMenu: any = document.getElementById("menuTable");
  let active: boolean = activeMenu.checked;
  if (active == true) {
    blockMenu.style.transform = 'translate(320px, 0)';
    blockMenu.style.transition = "0.4s ease-in-out";
  }
  if (active !== true) {
    blockMenu.style.transform = 'translate(-302px, 0)';
    blockMenu.style.transition = "0.4s ease-in-out";
  }
};

