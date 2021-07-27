const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if (username === "user" && password === "user") {
        alert("You have successfully logged in.");
        location = "tugas3.html"
    } else {
        alert("Wrong Username/Password")
        loginForm.username.value = ''
        loginForm.password.value = ''
    }
})


