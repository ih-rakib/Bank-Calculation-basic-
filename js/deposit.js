document.getElementById('btn-deposit').addEventListener('click', function(){
    const currentDepositField = document.getElementById('deposit-field');
    const currentDepositString = currentDepositField.value;
    const currentDepositAmount = parseFloat(currentDepositString);
    currentDepositField.value = '';

    const depositTotalField = document.getElementById('deposit-total');
    const previousDepositString = depositTotalField.innerText;
    const previousDepositAmount = parseFloat(previousDepositString);

    if(isNaN(currentDepositAmount)){
        alert('Please Enter a valid amount!');
        return;
    }
    const depositTotal = previousDepositAmount + currentDepositAmount;
    depositTotalField.innerText = depositTotal;

    const balanceTotalField = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const balanceTotal = previousBalanceTotal + depositTotal;
    balanceTotalField.innerText = balanceTotal;
})