document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;

    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotal = depositTotalElement.innerText;
    const currentDepositTotal = parseFloat(newDepositAmount) + parseFloat(previousDepositTotal);
    depositTotalElement.innerText = currentDepositTotal;


    // balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;

    const currentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
})