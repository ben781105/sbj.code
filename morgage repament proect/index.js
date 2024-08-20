
let repaymentRadio = document.getElementById('repayment')
let interestRadio = document.getElementById('interest')
let calculateButton = document.getElementById('calculate-button')
let monthlyIncome = document.getElementById('monthly-income')
let totalIncome = document.getElementById('total-income')


let resultsActive = document.getElementById('results-active').classList.add('hide')
let resultsEmpty = document.getElementById('results-empty')
function calculateFormula() {
    resultsEmpty = document.getElementById('results-empty').classList.add('hide')
    resultsActive = document.getElementById('results-active').classList.remove('hide')
    //showing up the results page

    // calculating repayments
    if(repaymentRadio.checked){
    // Getting values from inputs
    
    let mortgageAmount = parseFloat(document.getElementById('mortgage-amount').value)
    let mortgageTerm = parseFloat(document.getElementById('mortgage-term').value)
    let interestRate = parseFloat(document.getElementById('interest-rate').value)
    let monthlyIncome = (document.getElementById('monthly-income'))
    let totalIncome = (document.getElementById('total-income'))

    // Checking if inputs are valid numbers
    if (isNaN(mortgageAmount) ||isNaN(mortgageTerm) || isNaN(interestRate) || mortgageAmount <= 0 ||mortgageTerm <= 0 || interestRate < 0) {
        window.alert('invalid input!')
        return;
    }

    // Calculatimg monthly interest rate and number of payments
    let monthlyInterestRate = (interestRate / 100)   / 12
    let numberOfPayments = mortgageTerm* 12

    // Calculating monthly repayment
    let numerator = mortgageAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)
    let denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments)- 1
    let monthlyRepayment = numerator / denominator;

    // Output result
    monthlyIncome.textContent = monthlyRepayment.toLocaleString('en-US',{style:'currency',currency:'USD'})
    totalIncome.textContent = (monthlyRepayment*numberOfPayments).toLocaleString('en-US',{style:'currency',currency:'USD'})
}
// calculating only interest
if(interestRadio.checked){
    
    let mortgageAmount = parseFloat(document.getElementById('mortgage-amount').value)
    let mortgageTerm = parseFloat(document.getElementById('mortgage-term').value)
    let interestRate = parseFloat(document.getElementById('interest-rate').value)
    let monthlyIncome =(document.getElementById('monthly-income'))
    let totalIncome = (document.getElementById('total-income'))
    let monthlyInterestRate = (interestRate / 100)   / 12
    let numberOfPayments = mortgageTerm* 12
    if (isNaN(mortgageAmount) ||isNaN(mortgageTerm) || isNaN(interestRate) || mortgageAmount <= 0 ||mortgageTerm <= 0 || interestRate < 0) {
        window.alert('invalid input!')
        return;
    }
    // monthly and total interest
    monthlyIncome.textContent = (mortgageAmount*monthlyInterestRate).toLocaleString('en-US',{style:'currency',currency:'USD'})
    totalIncome.textContent = (mortgageAmount*monthlyInterestRate*numberOfPayments).toLocaleString('en-US',{style:'currency',currency:'USD'})
    
}
if(!repaymentRadio.checked && !interestRadio.checked){
    alert('please choose from the available options to continue')
    resultsActive = document.getElementById('results-active').classList.add('hide')
    resultsEmpty = document.getElementById('results-empty').classList.remove('hide')
}
}
 function clearAll(){
    resultsEmpty = document.getElementById('results-empty').classList.remove('hide')
    resultsActive = document.getElementById('results-active').classList.add('hide')
    let mortgageAmount = document.getElementById('mortgage-amount')
    let mortgageTerm = document.getElementById('mortgage-term')
    let interestRate = document.getElementById('interest-rate')
    let repaymentRadio = document.getElementById('repayment')
    let interestRadio = document.getElementById('interest')
     mortgageAmount.value = ''
     mortgageTerm.value = ''
     interestRate.value = ''
    repaymentRadio.checked = false
    interestRadio.checked = false
 }

