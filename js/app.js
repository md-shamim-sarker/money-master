document.getElementById('calculate-button').addEventListener('click', function() {
    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const clothes = getInputValue('clothes');

    if(income <= 0 || food <= 0 || rent <= 0 || clothes <= 0 || isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)) {
        alert('Please, Enter valid number greater than 0.');
        return;
    }

    const totalExpenses = food + rent + clothes;
    const balance = income - totalExpenses;

    if(totalExpenses > income) {
        alert('Sorry, Your balance is not sufficient.');
        return;
    }

    document.getElementById('total-expenses').innerText = totalExpenses;
    document.getElementById('balance').innerText = balance;
});

document.getElementById('save-button').addEventListener('click', function() {
    const income = getInputValue('income');
    const save = getInputValue('save');
    if(save < 0 || save > 100) {
        alert('Negative value or greater than 100 is not allowed.');
        return;
    }
    const savings = income * save / 100;
    const balance = getElementValue('balance');

    if(savings > balance) {
        alert('Your balance is low.');
        return;
    }

    const remainBalance = balance - savings;
    document.getElementById('savings').innerText = savings;
    document.getElementById('remainBalance').innerText = remainBalance;
});