## Exemplos básicos de HTML e Java Script

##### [ECMAScript language specification](https://www.ecma-international.org)<br/>

#### HTML Storage
Aplicação simulação paginação com HTML e Java Script sob demanda utilizando local store

01 - Exemplo Java script (EMAC Script 6)

- (const) Declaração **constante** em Java Script (constantes devem obrigatoriamente serem declaradas já recebendo um valor)
```javascript
	const minha_constante = "Esse valor não poderá ser alterado e novas atribuições não serão aceitas.";
```

- (var) Declaração de variáveis em Java Script (funciona no escopo Global e Local)
```javascript
	var minha_variavel = "Teste de valor para a variável.";
```

- (let) Declaração de variável let (tem escopo Global, Local e em Bloco)
```javascript
	const minha_constante = "Esse valor não poderá ser alterado e novas atribuições não serão aceitas.";
```

**Características de variáveis do tipo **let** e **var** que tem diferença em escopo que possuem:**

Definições de bloco:

- Bloco é tudo que está em chaves ( { } ), exemplos de *Bloco*:
```javascript

	var valorreferencia = 4;

	// Bloco 1
	{
		var valor1 = 1;
	}
	
	// Bloco 2	
	while(valorreferencia < 8)
	{
		var valor2 = 1;
	}
	
	// Bloco 3	
	for(var indice = 0; indice < valorreferencia; indice++)
	{
		var valor3 = 1;
	}
	
	// Bloco 4
	if(valorreferencia == 5)
	{
		var valor4 = 1;
	}
```

- Declarações de variáveis do tipo **let** e do tipo **var** com seus determinados escopos.
```javascript

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
```


