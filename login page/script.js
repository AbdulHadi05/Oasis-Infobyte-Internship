function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert("Login successful!");
        // Redirect to secured page (you can change the URL to your secured page)
        window.location.href = "secured.html";
    } else {
        alert("Invalid username or password.");
    }
}

function signup() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);
        alert('Registration successful! You can now log in.');
        showLogin();
    } else {
        alert('Please fill in all fields.');
    }
}

function showSignup() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-box').classList.remove('hidden');
}

function showLogin() {
    document.getElementById('signup-box').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

function loginWithGoogle() {
    open("https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-249038611%3A1723449961121623&ddm=0");
    
}

function loginWithFacebook() {
    open("https://web.facebook.com/");
    
}
