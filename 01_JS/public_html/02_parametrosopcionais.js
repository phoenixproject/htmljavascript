function soma(a,b = 50)
{        
    console.log(a + b);
}

function sub(a,b,inverter = false)
{
    if(inverter)
    {
        console.log(a-b);
    }
    else{
        console.log(b-a);
    }
}

// Como podem ser chamadas as funções 
console.log(soma(4,2));
console.log(soma(10));

console.log(sub(5,3,true));
console.log(sub(20,80));
