function inserir(){
    valorj = document.getElementById('valor').value;
    acaoj = document.getElementById('acao').value;
    modoj = document.getElementById('modo').value;
    bancoj = document.getElementById('banco').value;
    let total = 0;
    let soma = 0;

  
    if (valorj == 0 || acaoj == 0 || modoj == 0 ||  bancoj ==0){
        alert('Preencher todos os campos');
    }else{
        total = (valorj);    
        }
        
    }

    alert(total)
