const money = document.getElementById('money')
const percentage = document.getElementById('percentage')
const submitButton = document.querySelector('button[type=submit]')
const showPercentage = document.getElementById('showPercentage')
const showMoney = document.getElementById('showMoney')
const showPercenMoney = document.getElementById('showPercentMoney')

submitButton.addEventListener('click', (event)=>{
    event.preventDefault();

    if(money.value === '' || percentage.value === ''){
        alert("Money & Percentage cannot be Empty!")
    }
    else {
        calculatePercentage();
    }
    

})

const calculatePercentage = ()=>{
    result = (money.value*percentage.value)/100;
    showPercenMoney.textContent = result;
    showMoney.textContent = money.value;
    showPercentage.textContent = percentage.value;

    money.value = '';
    percentage.value = '';
}
