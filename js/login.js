document.getElementById('btn-login').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value = '';
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value = '';
    
    if(email == 'rakib@hasan.com' && password == 'rakib'){
        window.location.href = 'http://127.0.0.1:5500/page.html'
    }else{
        alert('Please put email and password correctly!');
    }
})