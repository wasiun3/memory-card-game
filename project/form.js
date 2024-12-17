
var form = document.getElementById('form');
form.addEventListener('submit',function(event){ //whatever event happens
    event.preventDefault() //Prevents auto submit
    var username = document.getElementById('username').value;
    console.log(username);
    var email = document.getElementById('email').value;
    console.log(email);
    var username = document.getElementById('password').value;
    console.log(password);
    var email = document.getElementById('password2').value;
    console.log(password2);
})