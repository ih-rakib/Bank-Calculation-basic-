document.getElementById('btn-withdraw').addEventListener('click', function(){
    const currentWithdrawField = document.getElementById('withdraw-field');
    const currentWithdrawString = currentWithdrawField.value;
    const currentWithdrawAmount = parseFloat(currentWithdrawString);
    currentWithdrawField.value = '';

    const withdrawTotalField = document.getElementById('withdraw-total');
    const previousWithdrawString = withdrawTotalField.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);

    const balanceTotalField = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalField.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(isNaN(currentWithdrawAmount)){
        alert('Please Enter a valid amount!');
        return;
    }else if(currentWithdrawAmount > previousBalanceTotal){
        alert('Insufficient Money!!');
        return;
    }

    const withdrawTotal = previousWithdrawAmount + currentWithdrawAmount;
    withdrawTotalField.innerText = withdrawTotal;


    const balanceTotal = previousBalanceTotal - withdrawTotal;
    balanceTotalField.innerText = balanceTotal;
})