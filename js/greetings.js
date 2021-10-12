const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetin = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const usernameLocalStorage = localStorage.getItem(USERNAME_KEY);

function handleSubmitBtnClick(event) {
  event.preventDefault();

  const username = loginInput.value;
  console.log(username);
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetingAction(username);
}

function greetingAction(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (usernameLocalStorage === null) {
  // form을 실행
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // login버튼 실행
  loginForm.addEventListener("submit", handleSubmitBtnClick);
} else {
  // h1의 hidden을 없앰
  greeting.classList.remove("hidden");
  // h1은 출력
  greetingAction(usernameLocalStorage);
}
