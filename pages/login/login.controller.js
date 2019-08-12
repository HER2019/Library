window.onload = function () {
    window.lms = new LMS();
    console.log('sdfs');

    if (window.lms.authService.isLogined()) {
        window.location = 'some.html'
    }
};


function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    try {
        let info = window.lms.authService.login(username, password);
        console.log(info);
    } catch (e) {
        console.log(e);
        document.getElementById('error-message').innerText = e.message;
    }
}