// DOM Elements 
const budget = document.getElementById('budget')
const expenses = document.getElementById('expenses')
const btn = document.getElementById('calculate')
const budgetInfo = document.getElementById('budgetInfo')
const expenseInfo = document.getElementById('expenseInfo')
const balanceInfo = document.getElementById('balanceInfo')
const valueMessage = document.querySelector('.value-message')
const closeBtn = document.getElementById('close')
const debtInfo = document.getElementById('debtInfo')
const expenseTitleInput = document.getElementById('expenseTitleInput')
const expenseList = document.querySelector('.expense-list')

// Click Event
btn.addEventListener('click', () => {
    // ================= Caclulation ========================
    // Calculate the balance
    let calc = budget.value - expenses.value
    budgetInfo.innerHTML = '$' + budget.value
    expenseInfo.innerHTML = '$' + expenses.value
    balanceInfo.innerHTML = '$' + calc

    // Calulate the debt
    let debtCalc = expenses.value - budget.value
    debtInfo.innerHTML = '$' + debtCalc

    // =============== DOM Manipulation ========================
    // Append expenses and values in DOM
    const div = document.createElement('div')
    div.classList.add('expense-div')
    div.innerHTML = `<div class="expense-div">
            <div class="expense-cause">
                <span id="expense-title">${expenseTitleInput.value}</span>
            </div>
            <div class="expense-value">
                <span id="expense-value">${expenses.value}</span>
                </div>
            </div>`
    expenseList.appendChild(div)

    // Delete expense-div
    const deleteDiv = document.createElement('div')
    deleteDiv.classList.add('deleteDiv')
    deleteDiv.innerHTML = `
                <div class="delete"> 
                    <i class="fa-solid fa-trash"></i>
                </div>  
                `
    div.appendChild(deleteDiv)

    deleteDiv.addEventListener('click', () => {
        // Remove the child when clicked on delete icon
        expenseList.removeChild(div)
    })

    // ========== Conditionals ===============

    // Checks if the budget or expenses are undefined, negative or empty and displays a message
    if (budget.value < 0 || expenses.value < 0 || budget.value === '' || expenses.value === '') {
        valueMessage.style.display = 'block'
        budgetInfo.innerHTML = '$' + 0
        expenseInfo.innerHTML = '$' + 0
        closeBtn.style.display = 'block'
        expenseList.removeChild(div)
    }

    // Checks if debt is more than the balance
    if (debtInfo.innerHTML > balanceInfo.innerHTML) {
        document.body.style.background = 'radial-gradient(rgba(255,0,0,.2), rgba(255,0,0,.5)) '
        document.body.style.height = '100vh'
    } else if (debtInfo.innerHTML < balanceInfo.innerHTML) {
        document.body.style.background = 'radial-gradient(rgba(0,255,0,.2), rgba(0,255,0,.5))'
        document.body.style.height = '100vh'
    } else if (budget.value < 0 || expenses.value < 0 || budget.value === '' || expenses.value === '') {
        document.body.style.backgorundColor = "transparent"
    } else if (debtInfo.innerHTML === balanceInfo.innerHTML) {
        document.body.style.background = 'radial-gradient(rgba(0,0,255,.2), rgba(0,0,255,.5))'
        document.body.style.height = '100vh'
    } else {
        document.body.style.backgorundColor = "transparent"
    }
})

// Event to close the message
closeBtn.addEventListener('click', () => {
    valueMessage.style.display = 'none'
    closeBtn.style.display = 'none'
})

// Function to reset
const reset = () => {
    budget.value = ''
    expenses.value = ''
    expenseTitleInput.value = ''
    budgetInfo.innerHTML = '$' + 0
    expenseInfo.innerHTML = '$' + 0
    balanceInfo.innerHTML = '$' + 0
    debtInfo.innerHTML = '$' + 0
    document.body.style.background = 'transparent'
}