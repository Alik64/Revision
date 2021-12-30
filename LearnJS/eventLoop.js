let i = 0;

let start = Date.now();

function count() {

    // делаем часть тяжёлой работы (*)
    do {
        i++;
    } while (i % 1e6 != 0);

    if (i == 1e9) {
        alert("Done in " + (Date.now() - start) + 'ms');
    } else {
        setTimeout(count); // планируем новый вызов (**)
    }

}

count();

/*Теперь интерфейс браузера полностью работоспособен во время выполнения «счёта».

Один вызов count делает часть работы (*), а затем, если необходимо, планирует свой очередной запуск (**):

Первое выполнение производит счёт: i=1…1000000.
Второе выполнение производит счёт: i=1000001…2000000.
…и так далее. */


//      2
/* Теперь, когда мы начинаем выполнять count() и видим, что потребуется выполнить count() ещё раз, мы планируем этот вызов немедленно, перед выполнением работы.

Если вы запустите этот код, то легко заметите, что он требует значительно меньше времени.*/
let i = 0;

let start = Date.now();

function count() {

    // перенесём планирование очередного вызова в начало
    if (i < 1e9 - 1e6) {
        setTimeout(count); // запланировать новый вызов
    }

    do {
        i++;
    } while (i % 1e6 != 0);

    if (i == 1e9) {
        alert("Done in " + (Date.now() - start) + 'ms');
    }

}

count();

// 3 

setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);

let p = new Promise(function (resolve, reject) {
    console.log('Создание промиса');
    resolve();
});

p.then(function () {
    console.log('Обработка промиса');
});

console.log('Конец скрипта');
/*
1.Создание промиса
2.Конец скрипта
3.Обработка промиса
4.Таймаут
 */