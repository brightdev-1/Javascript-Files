// Standard email format
const emailReg = /^[A-Za-z0-9._%-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/;

// 8+ chars, at least one lowercase, one uppercase, one digit, one special char
const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~]).{8,}$/;

function showLogin() {
    document.getElementById('signUpForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}

function showSignUp() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signUpForm').classList.remove('hidden');
}

function signUp(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let terms = document.getElementById('terms').checked;

    if (
        firstName === '' ||
        lastName === '' ||
        email === '' ||
        password === '' ||
        confirmPassword === '' ||
        terms === false
    ) {
        alert('Please fill in all fields and agree to the terms.');
        return;
    }

    if (!emailReg.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!passwordReg.test(password)) {
        alert('Password must be at least 8 characters and include an uppercase letter, a lowercase letter, a number, and a special character.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (localStorage.getItem('email') === email) {
        alert('An account with this email already exists.');
        return;
    }

    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Account created successfully! Please log in.');
    document.getElementById('signUpForm').reset();
    showLogin();
}

function login(event) {
    event.preventDefault();

    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    if (email === '' || password === '') {
        alert('Please enter both email and password.');
        return;
    }

    let storedEmail = localStorage.getItem('email');
    let storedPassword = localStorage.getItem('password');

    if (email !== storedEmail || password !== storedPassword) {
        alert('Invalid email or password.');
        return;
    }

    let firstName = localStorage.getItem('firstName');
    document.getElementById('output').textContent = `Welcome back, ${firstName}!`;

    document.getElementById('loginForm').classList.add('hidden');
}

document.getElementById('signUpForm').addEventListener('submit', signUp);
document.getElementById('loginForm').addEventListener('submit', login);
document.getElementById('goToLoginBtn').addEventListener('click', showLogin);
document.getElementById('goToSignUpBtn').addEventListener('click', showSignUp);