function jsonreduzido1()
{        
    var nome = "João";
    var idade = 54;
    var empresa = "Empresa X";

    var usuario = {
        nome: nome,
        idade: idade,
        empresa: empresa
    };

    console.log(usuario);
}

function jsonreduzido2()
{
    var nome = "João";
    var idade = 54;
    var empresa = "Empresa X";

    var usuario = {
        nome,
        idade,
        empresa
    };

    console.log(usuario);
}

jsonreduzido1();
jsonreduzido2();