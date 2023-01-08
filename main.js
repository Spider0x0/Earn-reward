let btn = document.getElementById('btn');
let count = document.getElementById('count');
let count2 = document.getElementById('count-r');
// function 
btn.onclick=()=>{
    let result = count.innerHTML =   Number(count.innerHTML)   + 1
    if(result == '100')
    {
        count.innerHTML='0'
        let result2 = count2.innerHTML =  
        Number( count2.innerHTML) + 1 ;
    }
    }
