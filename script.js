'use strict';

let money, time;

function start(params) {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');
            if ((typeof(a)) == 'string' && (typeof(a)) != null &&
                (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert(`Ежедневный бюджет: ${appData.moneyPerDay}`);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log('Доход меньше минимального');
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <= 2000) {
            console.log('Средний доход');
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий доход');
        } else {
            console.log('Ошибка');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какая сумма накоплений?'),
                procent = +prompt('Под какой процент?');
            appData.monthIncome = (save * procent / 100) / 12;
            alert(`Доход в месяц с депозита: ${appData.monthIncome.toFixed(2)}`);
        }
    },
    chooseOptExpense: function() {
        for (let i = 1; i <= 3; i++) {
            let a = prompt('Статья необязательных расходов?');

            appData.optionalExpenses[i] = a;

        }
        console.log(appData.optionalExpenses);
    },
    chooseIncome: function() {
        let items = prompt('Что принесет доп. доход? (через зпт.)', '');

        if (typeof(items) != 'string' || typeof(items) == null || items == '') {
            console.log('Error');
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что еще?'));
            appData.income.sort();
        }
        appData.income.forEach(function(itemmassive, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные:' + key + ' - ' + appData[key]);
};