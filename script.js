function login() {
  var email = document.getElementById('txtemail')
  var senha = document.getElementById('txtsenha')

  if (email.value.length == 1 && senha.value.length == 1 ){
    window.location.href = "http://pt.stackoverflow.com";
  }else{
    window.alert('Login ou senha incorreto')
  }
  }