function login() {
  var email = document.getElementById('txtemail')
  var senha = document.getElementById('txtsenha')

  if (email.value.length == 1 && senha.value.length == 1 ){
    window.location.href = "https://daianemsilva09.github.io/finanday/principal";
  }else{
    window.alert('Login ou senha incorreto')
  }
  }

  function enviar(){
    var valor = document.getElementById('valor')
    var roud1 = document.getElementsByName('novins')

    //window.alert `valor ${valor}`
    
      if (valor.value.length >=1 ){
          if (roud1[0].checked){
            var receita = Number(valor.value) 
            window.alert `receita teste ${receita}`
          }else if (roud1[1].checked) {
            window.alert('despesas')
          }
        }else{
          window.alert('Sem Valor')
        }
  }