function register() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    if (validateRegistrationInputs(username, password)) {
        console.log('käyttäjä rekiströity')
        window.location.href = 'login.html'
    } else {
        console.log('Invalid')
    }
}

function validateRegistrationInputs() {
    
}