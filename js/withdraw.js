document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = withdrawField.value;

    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotal = withdrawTotalElement.innerText;
    const currentWithdrawTotal = parseFloat(newWithdrawAmount) + parseFloat(previousWithdrawTotal);
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;
    const currentBalanceTotal = parseFloat(previousBalanceTotal) - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


    withdrawField.value = '';
})