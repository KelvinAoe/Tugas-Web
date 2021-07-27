
const loginForm = document.getElementById("register-form");
const registerButton = document.getElementById("register-form-submit");


registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    const name = loginForm.namauser.value;
    const tgl = loginForm.tgl.value
    const username = loginForm.user.value;
    const password = loginForm.pass.value;
    alert("Name: "+name +"\n" +"Tanggal Lahir" +tgl+ "\n" )
    location = "tugas3.html"
})