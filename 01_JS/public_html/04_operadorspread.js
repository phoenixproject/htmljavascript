function operadorspread1()
{        
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
}

function operadorspread2()
{
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
}

operadorspread1();
operadorspread2();