document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    if (username === "mahe" && password === "123") 
    {
        alert("Login successful!");
        // Redirect to another page or perform any action you want on successful login
    } 
    else {
        errorMessage.textContent = "Invalid username or password";
    }
});
