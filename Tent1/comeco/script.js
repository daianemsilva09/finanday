let num = document.querySelector('input#valor')
let tot = document.querySelector('select#total')
let valores = []
let total = 0



function adicional(){
    if (num.value >= 1){
       
        valores.push(Number(num.value))
        let item =document.createElement('option')
        item.text = `${num.value}`
        tot.appendChild(item)
        visu.innerHTML = ''
    }else{
        window.alert ('não')
    }
    num.value = ''
    num.focus()
}

function add(){
    let tot2 = valores.length
    let soma = 0
  

    for(let pos in valores){
        soma += valores[pos]
       
    }

    visu.innerHTML =''
    visu.innerHTML += `<p>teste ${tot2}</p>`
    visu.innerHTML += `<p>soma ${soma}</p>`
   
}

function rem(){
    let tot2 = valores.length
    let sub = 0
  

    for(let pos in valores){
        sub -= valores[pos]
    }

    visu.innerHTML =''
    visu.innerHTML += `<p>teste ${tot2}</p>`
  
    visu.innerHTML += `<p>soma ${sub}</p>`
}

