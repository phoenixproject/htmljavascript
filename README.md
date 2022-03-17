## Exemplos básicos de HTML e Java Script

##### [ECMAScript language specification](https://www.ecma-international.org)<br/>

#### HTML Storage
Aplicação testando **paginação** com HTML e Java Script sob demanda utilizando **local storage**.

#### Exemplos básico de Java Script de atulizações das versões ES6, ES7, ES8
Dentro das atualizações das versões do Java Script seguem alguns exemplos práticos das mesmas.

01 - Exemplo Java script trabalhando uso de atribuições em escopos distintos

- (const) Declaração de **constante** em Java Script (constantes devem obrigatoriamente serem declaradas já recebendo um valor)
```javascript
	const minha_constante = "Esse valor não poderá ser alterado 
	e novas atribuições não serão aceitas.";
```

- (var) Declaração de variáveis em Java Script (funciona no escopo Global e Local)
```javascript
	var minha_variavel = "Teste de valor para a variável.";
```

- (let) Declaração de variável let (tem escopo Global, Local e em Bloco)
```javascript
	const minha_constante = "Esse valor não poderá ser alterado 
	e novas atribuições não serão aceitas.";
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
		console.log("Testando aqui o valor de " + nome + " " + sobrenome + "
		: " +  valorreferencia);
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

02 - Exemplo de Java script utilizando parâmetros opcionais

- O parâmetro opcional já recebe atribuição de valor na assinatura do método e caso seja omitido na chamada da função assume seu valor.
```javascript

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
```

03 - Exemplo de novo recurso de montagem de JSON em Java Script

- O JSON comumente era montado como na forma que segue.
```javascript

	var nome = "João";
	var idade = 54;
	var empresa = "Empresa X";
	
	var usuario = {
		nome: nome,
		idade: idade,
		empresa: empresa
	};
	
	console.log(usuario);
```
- Agora é possível passar o JSON para uma forma reduzida que somente é preciso colocar o nome do campo quando você já tem uma variável, pois o Java Script lê o nome dessa variável (usuario) e cria os campos dela para você. Lembrando que este recurso só funciona com campos que contenham variáveis do tipo const, var e let.
```javascript

	var nome = "João";
	var idade = 54;
	var empresa = "Empresa X";
	
	var usuario = {
		nome,
		idade,
		empresa
	};
	
	console.log(usuario);
```

04 - Operador de Spread

- Sem o operador Spread para exibir um JSON/array era preciso fazer da seguinte forma:
```javascript

	var nome = "João";
	var idade = 54;
	
	var empresa = {
		nome: "Empresa Y",
		cidade: "Rio de Janeiro",
		site: "rj.gov.br",
		email: "cidade@rj.gov.br"
	};
	
	var usuario = {
		nome,
		idade,
		empresa: empresa.nome,
		cidade: empresa.cidade,
		site: empresa.site,
		email: empresa.email
	};
	
	console.log(usuario);
```	
	
- Contudo com o operador Spread (representado por ...) é possível apenas utilizá-lo e colocar o nome do objeto que deseja exibir as informações.
```javascript

	var nome = "João";
	var idade = 54;
	
	var empresa = {
		nome: "Empresa Y",
		cidade: "Rio de Janeiro",
		site: "rj.gov.br",
		email: "cidade@rj.gov.br"
	};
	
	var usuario = {
		nome,
		idade,
		...empresa
	};
	
	console.log(usuario);
```	