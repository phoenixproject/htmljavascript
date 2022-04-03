    var usuario = {
        nome: "Lady D",
        idade: "42",
        empresa: "Tux Corporation",
        endereco: "Avenida Boulevard"
    };

    // Recurso usando destructuring
    let { nome } = usuario;
    // Recurso sem utilizar destructuring (forma comum)
    let nome = usuario.nome;

    // Recurso usando destructuring com múltiplos campos
    let { idade, empresa, endereco } = usuario;
    
    console.log(nome);
    console.log(idade);
    console.log(empresa);
    console.log(endereco);    