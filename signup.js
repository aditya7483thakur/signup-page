document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }
    i = phone.length
    if(i>10){
        alert("Invalid Phone Number")
        return;
    }

    console.log('Form submitted:', { name, username, email, phone, password });
    alert('Registration successful!');
});