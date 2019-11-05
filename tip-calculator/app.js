const billTotalInput = document.querySelector('#input-bill-total');
const tipInput = document.querySelector('#input-tip');
const totalInput = document.querySelector('#input-total');
const tipRange = document.querySelector('#range-tip');
const splitRange = document.querySelector('#range-split');
const splitTotalInput = document.querySelector('#input-split-total');
const tipEndLabel = document.querySelector('#label-tip-end');
const splitEndLabel = document.querySelector('#label-split-end');

billTotalInput.addEventListener('keyup', () => {
    const enteredTip = tipRange.value;
    const enteredSplit = splitRange.value;

    tipCalculator(enteredTip, splitRange.value);
});

tipRange.addEventListener('ionChange', (event) => {
    const enteredTip = event.detail.value;
    const enteredSplit = splitRange.value;

    tipEndLabel.innerHTML = enteredTip + '%';

    tipCalculator(enteredTip, enteredSplit);
});

splitRange.addEventListener('ionChange', (event) => {
    const enteredTip = tipRange.value;
    const enteredSplit = event.detail.value;

    splitEndLabel.innerHTML = enteredSplit;

    tipCalculator(enteredTip, enteredSplit);
});

function tipCalculator(enteredTip, enteredSplit) {
    const enteteredBillTotal = +billTotalInput.value;
    
    const tipPercentage = enteredTip / 100;
    const tip = enteteredBillTotal * tipPercentage;
    const total = enteteredBillTotal + tip;
    const splitTotal = total / enteredSplit;

    tipInput.value = tip;
    totalInput.value = total;
    splitTotalInput.value = splitTotal;
}