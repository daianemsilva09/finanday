function adicionar(){
   
    let num = document.querySelector('input#valor')
    let tot = document.querySelector('select#total')
    let total = []
    let res =0

    
    if (num.value >=1){
        for(let pos in total){
            total = (num.value)
            soma += total[pos]
        }
       
        visu.innerHTML = `<p>total ${total}</p>`
        visu.innerHTML = `<p>soma ${soma}</p>`
     
    }else{
        window.alert('Não')
    }
    
}
