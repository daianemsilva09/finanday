const transactionsUl = document.querySelector('#transactions')

const dummyTransactions =[
    {id: 1,name:'Bolo', amount: -20 },
    {id: 2,name:'Salario', amount: 300 },
    {id: 3,name:'Torta de frango', amount: -10 },
    {id: 4,name:'violao', amount: 150 }
]

const addTransactionIntoDOM = transaction => {
    const operator= transaction.amount < 0 ? '-' : '+'
    const CSSClass= transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator= Math.abs(transaction.amount)
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML =`
    ${transaction.name} <span> ${operator} R$ ${amountWithoutOperator}</span>`

    transactionsUl.append(li)
}

const init = () => {
    dummyTransactions.forEach(addTransactionIntoDOM)
}

init()

