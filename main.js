// const arr= ["*", "**", "***", "****", "*****", "******", '*******']
//
// for(let i = 0; i < arr.length; i++){
//     if(i === 6){
//         break;
//     }else{
//         console.log(arr[i])
//     }
// }

let str = ''
for (let i = 0; i <= 7; i++){
    console.log(str)
    str += '*'
}

//

function fizzBuzz(a){
    for(let i = 1; i<a+1; i++){
        if(i % 3 === 0 && i % 5 !== 0){
            console.log('Fizz');
        }else{if(i % 5 === 0 && i % 3 !== 0){
            console.log('Buzz');
        }else{if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }else{
            console.log(i);
        }
        }
        }
    }
}

fizzBuzz(100)