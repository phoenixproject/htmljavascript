// Escopo Global
var valorreferencia = 4; 
let valorreferencialet = 6;

// Escopo Local
function funcaoTestar()
{
        var nome = "João";
        let sobrenome = "Pena";
        console.log("Testando aqui o valor de " + nome + " " + sobrenome + ": " +  valorreferencia);
}

// Escopo em Bloco
// Bloco 1
{
        var valor1v = 1;
        let valor1l = 3;
}

// Bloco 2	
while(valorreferencia > 8)
{
        var valor1v = 1;
        let valor1l = 4;
}

// Bloco 3	
for(var indice = 0; indice < valorreferencia; indice++)
{
        var valor3v = 78;
        let valor3l = 99;
}

// Bloco 4
if(valorreferencia == 5)
{
        var valor4v = 1;
        let valor4l = 1;
}

// Exibindo valor de escopo Global
console.log(valorreferencia); // Funciona porque var respeita o escopo Global.
console.log(valorreferencialet); // Funciona porque var respeita o escopo Global.

// Exibindo valor de escopo Local
// console.log(nome); // Erro! Porque var respeita o escopo Local.
// console.log(sobrenome); // Erro! Porque let respeita o escopo Local.

// Exibindo valor de escopo em Bloco
console.log(valor3v); // Funciona porque var NÃO respeita o escopo em Bloco!
console.log(valor3l); // Erro! Porque let respeita o escopo em Bloco!
