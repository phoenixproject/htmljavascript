    // Forma comum de declaração de função
    function soma(a,b){
        return a+b;
    }

    // Forma também convencional de declarar funções
    let mult1 = function(a,b){
        return a * b;
    };
    
    /* Arrow Functions só podem ser utilizadas em duas ocasições: 
     * - Trabalhando com callbacks;
     * - Salvando a função dentro de uma variável
     * */
    
    // Forma com arrow function para Callback
    (a,b,c) => {
        console.log(a * b * c);
    };
    
    // Forma com arrow function salvando numa variável (forma reduzida)
    let mult2 = (a,b,c) => {
        console.log(a * b * c);
    };
    
    // Forma com arrow function como parâmetro sem parênteses 
    // (apenas se houver somente UMA variável)
    let mult3 = a => {
        console.log(a * 4);
    };
    
    // Forma com arrow function (se ela só tiver APENAS UMA linha de código)     
    let mult4 = a => console.log(a * 4);
    
    // Forma com arrow function omitindo o retorno (return) 
    // (somente se ela só tiver APENAS UMA linha de código)     
    let mult5 = (a,b,c) => a * b * c;
       
    let resultado1 = soma(3,5);
    let resultado2 = mult1(7,2);
    let resultado3 = mult2(5,2,1);
    let resultado4 = mult3(6);
    let resultado5 = mult4(8);
    let resultado6 = mult5(8,5,2);
    
    console.log(resultado1);
    console.log(resultado2);
    console.log(resultado3);
    console.log(resultado4);
    console.log(resultado5);
    console.log(resultado6);