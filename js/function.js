function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueSring = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueSring);
    inputField.value = '';
    return inputFieldValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    element.innerText = '';
    return elementValue;
}

function setElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;

}
//  Deposit and balance total section
document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getElementValueById('deposit-total');
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setElementValueById('deposit-total', newDepositTotal);


    const previousBalanceTotal = getElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setElementValueById('balance-total',newBalanceTotal);

})

// Withdraw and balance total section

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setElementValueById('withdraw-field', newWithdrawTotal);


    const previousBalanceTotalUsingWithdraw = getElementValueById('balance-total');
    const newBalanceTotalUsingWithdraw = previousBalanceTotalUsingWithdraw - newWithdrawAmount;
    setElementValueById('balance-total',newBalanceTotalUsingWithdraw);
})