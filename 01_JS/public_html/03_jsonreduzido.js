function jsreduzido1()
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

function jsreduzido2()
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

jsreduzido1();
jsreduzido2();