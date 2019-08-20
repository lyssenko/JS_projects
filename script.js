'use strict';

let money = prompt('Ваш бюджет на месяц?', '');

let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expenses1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expensesCost1 = prompt('Во сколько обойдется?', ''),
    expenses2 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    expensesCost2 = prompt('Во сколько обойдется?', '');

appData.expenses.expenses1 = expensesCost1;
appData.expenses.expenses2 = expensesCost2;

alert(money / 30);