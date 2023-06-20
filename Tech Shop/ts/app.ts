document.getElementById("logIn").onclick = addElement;
function addElement() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("logMenu");
  newDiv.innerHTML = `
    <div id="regisClose" onclick="newDiv.handleClear()">
      <img src="ts/cross.svg" alt="a">
    </div>
    <div id="regisMenu">
    <div id="regisMenuTop">
    <p>
    Registration form
    </p>
    </div>
      <form action="" method="post">
        <p>Enter your name</p>
        <div class="input-container">
          <input type="text" required minlength="2" id="name">
          <label class="label">Enter name</label>
        <div class="underline"></div>
        </div>
        <p>Enter your email</p>
        <div class="input-container">
          <input type="email" required id="email">
          <label class="label">Enter email</label>
        <div class="underline"></div>
        </div>
        <p>Enter your password</p>
        <div class="input-container">
          <input type="password" id="parol" required minlength="5"  maxlength="20">
          <label class="label">Enter password</label>
        <div class="underline"></div>
        </div>
        <input type="submit" id="submit" value="Send form">
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
  let parol = document.getElementById("parol") as HTMLInputElement;
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

  let name = document.getElementById("name") as HTMLInputElement;
  let email = document.getElementById("email") as HTMLInputElement;


  let submit = document.getElementById("submit") as HTMLInputElement;


  let users = {};

  function User(this: any, name, email, parol) {
    this.name = name;
    this.email = email;
    this.parol = parol;
  }


  function createId(users) {
    return Object.keys(users).length;
  }

  submit.onclick = () => {
    const nameUser = name.value;
    const emailUser = email.value;
    const passwordlUser = parol.value;

    const user = new User(nameUser, emailUser, passwordlUser);
    const userId = 'User' + createId(users);
    users[userId] = user;
    console.log(users);

    alert(`${name.value} you are successfully registered`);
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


