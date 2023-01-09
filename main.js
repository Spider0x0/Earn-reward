//1
let buttom = document.getElementById('btn');
let count  = document.getElementById('count');
let result = document.getElementById('count-r');
// 2
let buttom2 = document.getElementById('btn2');
let count2  = document.getElementById('count2');
let result2= document.getElementById('count-r2');
// 3
let buttom3 = document.getElementById('btn3');
let count3  = document.getElementById('count3');
let result3 = document.getElementById('count-r3');
// 4
let buttom4 = document.getElementById('btn4');
let count4  = document.getElementById('count4');
let result4= document.getElementById('count-r4');
// 5
let buttom5 = document.getElementById('btn5');
let count5  = document.getElementById('count5');
let result5 = document.getElementById('count-r5');
// 6 
let buttom6 = document.getElementById('btn6');
let count6  = document.getElementById('count6');
let result6= document.getElementById('count-r6');

buttom.onclick=()=>{
    count.innerHTML = Number(count.innerHTML) +1
    if(count.innerHTML == 100){
        result.innerHTML = Number(result.innerHTML) + 1
    }
}
//2
buttom2.onclick=()=>{
    count2.innerHTML = Number(count2.innerHTML) +1
    if(count2.innerHTML == 100){
        result2.innerHTML = Number(result2.innerHTML) + 1
    }
}
//3
buttom3.onclick=()=>{
    count3.innerHTML = Number(count3.innerHTML) +1
    if(count3.innerHTML == 100){
        result3.innerHTML = Number(result3.innerHTML) + 1
    }
}
//4
buttom4.onclick=()=>{
    count4.innerHTML = Number(count4.innerHTML) +1
    if(count4.innerHTML == 100){
        result4.innerHTML = Number(result4.innerHTML) + 1
    }
}
//5
buttom5.onclick=()=>{
    count5.innerHTML = Number(count5.innerHTML) +1
    if(count5.innerHTML == 100){
        result5.innerHTML = Number(result5.innerHTML) + 1
    }
}
//6
buttom6.onclick=()=>{
    count6.innerHTML = Number(count6.innerHTML) +1
    if(count6.innerHTML == 100){
        result6.innerHTML = Number(result6.innerHTML) + 1
    }
}
