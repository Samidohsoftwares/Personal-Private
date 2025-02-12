
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Password:", password);

    alert("Login successful! ✅(Samidoh Tech Academy✅✅✅✅✅)");
});

let userName = "Alice";
let greeting = "Hello," + "userName" + "!";
console.log(greeting);
alert('greeting');


const specificDate = new Date(2025, 9, 2, 16, 7, 0);
console.log(specificDate);

