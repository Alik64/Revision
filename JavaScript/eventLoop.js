// ------------------- 1 --------------------------


function firstFunction() {
    console.log('log1')
    console.log('log2')
}

function secondFunction() {
    console.log('log3')
    firstFunction()
}

secondFunction()

//call stack

/*                                  output
1. => secondFunction()
2. => console.log('log3')
3. console.log('log3') =>           log3
4. => firstFunction()
5. => console.log('log1')
6. console.log('log1') =>           log1
7. => console.log('log2')
8. console.log('log2') =>           log2
9. return firstFunction()
10. return secondFunction()

*/



// ------------------- 2 --------------------------



console.log('start')
const btn = document.getElementById('btn')

function foo() {
    setTimeout(function callback() {
        console.log('hello from setTimeOut')
    }, 3000)
    console.log('hello from foo()')
}

btn.addEventListener('click', foo)

foo()

console.log('end')



