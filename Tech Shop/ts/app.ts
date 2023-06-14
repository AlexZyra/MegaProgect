document.getElementById("logIn").onclick = addElement;
function addElement() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("logMenu");
  newDiv.innerHTML = `
    <div id="regisClose" onclick="newDiv.handleClear()">
      <img src="ts/cross.svg" alt="a">
    </div>
    <div id="regisMenu">
    <div id="regisMenuTop"></div>
      <form action="" method="post">
        <p>Enter your name</p>
        <div class="input-container">
          <input type="text" id="input" required="">
          <label for="input" class="label">Enter name</label>
        <div class="underline"></div>
        </div>
        <p>Enter your email</p>
        <div class="input-container">
          <input type="email" id="input" required="">
          <label for="input" class="label">Enter email</label>
        <div class="underline"></div>
        </div>
        <p>Enter your password</p>
        <div class="input-container">
          <input type="password" id="parol" required="">
          <label for="input" class="label">Enter password</label>
        <div class="underline"></div>
        </div>
        
        <p>Re-enter your password</p>
        <div class="input-container">
          <input type="password" id="input" required id="confirm-password" value="">
          <label for="input" class="label">Re-enter password</label>
        <div class="underline"></div>
        </div>
        <input type="submit" id="submit">
      </form>
      <button id="activePassword">Show password</button>
    </div>
    
  `;
  newDiv.style.visibility = 'visible';
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  document.getElementById("regisClose").onclick = handleClear;
  function handleClear() {
    newDiv.innerHTML = '';
    newDiv.style.visibility = 'hidden';
  }
  let check = document.getElementById("activePassword");
  let parol = document.getElementById("parol");

  check.onclick = function show() {
    if (parol.getAttribute('type') == 'password') {
      parol.removeAttribute('type');
      parol.setAttribute('type', 'text');
      check.style.backgroundColor = "rgb(255, 70, 70)";
    } else {
      parol.removeAttribute('type');
      parol.setAttribute('type', 'password');
      check.style.backgroundColor = "rgb(61, 170, 61)";
    }

  }
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

