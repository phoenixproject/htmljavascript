/*$.ajax({
   url : '../pdfprotuna.php',
   dataType : 'html',
   type : 'POST',
   data : {'npis' : npis},
   beforeSend : function () {
         console.log('Carregando...');
   },
   success : function(retorno){
       alert(retorno);
   },
   error : function(a,b,c){
       alert('Erro: '+a[status]+' '+c);
   }
});*/

function PreencherBancoDeDados() {
   $.ajax({
      url:'configuracao.php',
      dataType : 'html',
      type : 'POST',
      data : {'requisicao' : 'inserir'},
      complete: function (response) {
         alert(response.responseText);
      },
      error: function () {
          alert('Erro');
      }
  });  

  return false;
}

var spinner = $('.loading-spinner');

$('#click-me').on("click", function(){
  spinner.addClass('active'); // ativa o loading
  
  $.ajax({
        url:'configuracao.php',
        dataType : 'html',
        type : 'POST',
        data : {'requisicao' : 'inserir'},
        complete: function (response) {
           alert(response.responseText);
        },
        error: function () {
            alert('Erro');
        }
    });  
  
  // Espera 5 segundos e desativa o loading
  setTimeout(function(){
    spinner.removeClass('active'); 
  }, 500000);
});

$(document).ready(function () {
    
    $('#btnPrencheDB').on('click', function () {
        setTimeout(function () {
            
            $.ajax({
                url:'configuracao.php',
                dataType : 'html',
                type : 'POST',
                data : {'requisicao' : 'inserir'},
                complete: function (response) {
                   alert(response.responseText);
                },
                error: function () {
                    alert('Erro');
                }
            });  
            
        }, 200000000);
    });
});

function ObterValoresDeBancoDeDados() {
   $.ajax({
      url:'configuracao.php',
      dataType : 'html',
      type : 'POST',
      data : {'requisicao' : 'obter'},
      complete: function (response) {
         //alert(response.responseText);         
         PreencheLocalStorage(response.responseText);
      },
      error: function () {
          alert('Erro');
      }
  });  

  return false;
}

function ObterCodigoItemDeLocalStorageEmArray(item)
{
    var itemlocalstorage = [];
        
    var filtro = item.split("</td>");
    var valor = filtro[0].split("<td>");
    var descricao = filtro[1].split("<td>");
        
    itemlocalstorage[0] = valor[1];
        
    //console.log(itemlocalstorage);          
    return itemlocalstorage[0];
}

function ObterItemDeLocalStorageEmArray(item)
{
    var itemlocalstorage = [];
        
    var filtro = item.split("</td>");
    var valor = filtro[0].split("<td>");
    var descricao = filtro[1].split("<td>");
        
    itemlocalstorage[0] = valor[1];
    itemlocalstorage[1] = descricao[1];
    
    //console.log(itemlocalstorage);          
    return itemlocalstorage;
}

function ObterArrayComTodosOsItensDeLocalStorage()
{
    var itenslocalstorage = [];
    
    for(var indice = 1; indice < (localStorage.length + 1); indice++)
    {
        var item = ObterItemDeLocalStorageEmArray(localStorage.getItem(indice));               
        itenslocalstorage[indice] = { indice: indice, valor: item[0], descricao : item[1]};
    }
    
    // Exibe os valores do array
    //console.log(itenslocalstorage);          
    
    return itenslocalstorage;
}

function compare(a, b) {
  
    const valorA = a.valor;
    const valorB = b.valor;
    
    let comparison = 0;
    
    if (valorA > valorB) {
        comparison = 1;
    } else if (valorA < valorB) {
        comparison = -1;
    }
    return comparison;
}

function SelectionSort(itens)
{
    
    for(var indice1 = 1; indice1 < itens.length; indice1++)
    {
        //set min to the current iteration of i
        //var minimo = itens[indice1]['valor'];
        //var minimo = minimo = { valor : itens[indice1]['valor'], descricao : itens[indice1]['descricao'] };

        var minimo = [];

        minimo[0] = indice1; 
        minimo[1] = itens[indice1]['valor']; 
        minimo[2] = itens[indice1]['descricao'];

        //console.log('Valor mínimo: ' + minimo);

        for(var indice2 = indice1 + 1; indice2 < itens.length; indice2++){

            if(parseInt(itens[indice2]['valor']) < parseInt(minimo[1]))
            {   
                //console.log('Valor indice2 em comparação com minimo: ' + itens[indice2]['valor']);
                //console.log('Valor minimo em comparação com indice2: ' + minimo);

                minimo[0] = indice2; 
                minimo[1] = itens[indice2]['valor']; 
                minimo[2] = itens[indice2]['descricao'];
            }
        }
    
        var arraytemp = []

        arraytemp[0] = indice1; 
        arraytemp[1] = itens[indice1]['valor'];
        arraytemp[2] = itens[indice1]['descricao'];

        itens[indice1]['indice'] = minimo[0];
        itens[indice1]['valor'] = minimo[1];
        itens[indice1]['descricao'] = minimo[2];

        itens[minimo[0]]['indice'] = arraytemp[0];
        itens[minimo[0]]['valor'] = arraytemp[1];
        itens[minimo[0]]['descricao'] = arraytemp[2];
    }
    return itens;
};

/*function ObterValoresPaginadosRestantesDeBancoDeDadosRemoto()
{
    var registro = localStorage.getItem(localStorage.length);
    
    var filtro1 = registro.split("</td>");
    
    var filtro2 = filtro1[0].split("<td>");
    
    var indice = filtro2[1];
    
    indice = 2;
    
    FazerRequisicaoAServidorRemotoParaObterValoresPaginadosRestantes(indice);
}*/

function FazerRequisicaoAServidorRemotoParaObterValoresPaginadosRestantes(indice) {
   
    $.ajax({
        url:'configuracao.php',
        dataType : 'html',
        type : 'POST',
        data : {'requisicao' : 'paginar', 'pagina' : indice },
        complete: function (response) {
           //alert(response.responseText);
           PreencheLocalStoragePorPaginacaoRemotaComUltimoItemDePaginacao(response.responseText);
        },
        error: function () {
            alert('Erro');
        }
    });  

    return false;
  
}

function ObterQuantidadeDeDadosNoServidor() {
   $.ajax({
      url:'configuracao.php',
      dataType : 'html',
      type : 'POST',
      data : {'requisicao' : 'obtercontagem'},
      complete: function (response) {
         //alert(response.responseText);
         ObterContagemDeDadosDoServidor(response.responseText);
      },
      error: function () {
          alert('Erro');
      }
  });  

  return false;
}

function ObterValoresPaginadosDeBancoDeDados() {
   $.ajax({
      url:'configuracao.php',
      dataType : 'html',
      type : 'POST',
      data : {'requisicao' : 'obterinicial'},
      complete: function (response) {
         //alert(response.responseText);
         ObterQuantidadeDeDadosNoServidor();
         PreencheLocalStorage(response.responseText);
      },
      error: function () {
          alert('Erro');
      }
  });  

  return false;
}

function PreencheLocalStoragePorPaginacaoRemota(data)
{
    // Obtém o Array Json
    var objarray = JSON.parse(data);
    
    // Exibe no console os elementos do array
    //console.log(objarray);
    //console.log(data);
    
    var itenslocalstorage = ObterArrayComTodosOsItensDeLocalStorage();
    
    //console.log(itenslocalstorage);
    
    var itens = [];
    
    var itensordenados = [];
    
    localStorage.clear();

    var contador = 1;

    // Armazenando itens do array JSON vindo dos servidor no array de itens
    for (var key in objarray) {
      
      if (objarray.hasOwnProperty(key))     
      {
        // Exibe os valores do array
        //console.log(objarray[key])          
                
        //itens[key] = objarray[key];
        itens[contador] = { valor : key, descricao : objarray[key] };                
        
        contador++;
      }
    }
    
    var indiceitens = itens.length;
    
    //console.log("Última ocorrência: " + indiceitens);
    
    // Armazenando itens do local storage no array de itens
    for(var indice = 1; indice < itenslocalstorage.length; indice++) 
    {
        //console.log("Índice: " + indice);
        //itens[itenslocalstorage[indice]['valor']] = itenslocalstorage[indice]['descricao'];        
        //itenslocalstorage[indice] = { indice: indice, valor: item[0], descricao : item[1]};
        itens[indiceitens] = { valor : itenslocalstorage[indice]['valor'], descricao : itenslocalstorage[indice]['descricao'] };                
        //console.log(itens[itenslocalstorage['valor']]);
        
        indiceitens++;
    }
     
    //console.log(itens);   
    
    //itensordenados = itens.sort(compare);    
    
    itensordenados = SelectionSort(itens);    
    
    //console.log(itensordenados);         
    
    for(var posicao = 1; posicao < itensordenados.length; posicao++) 
    {         
        //console.log(itensordenados[posicao]);
        /*if(!itensordenados[posicao].localeCompare("undefined") == 0)
        {
            localStorage.setItem(
                (posicao + 1), 
                '<td>' + itensordenados[posicao]['valor'] + '</td><td>' + itensordenados[posicao]['descricao'] + '</td>'
            );
        }*/
        
        localStorage.setItem(
            (posicao), 
            '<td>' + itensordenados[posicao]['valor'] + '</td><td>' + itensordenados[posicao]['descricao'] + '</td>'
        );
            
    }
    
    /*var contador = 1;
    
    // Percorre o array JSON
    for (var chave in itensordenados) {
      
        if (itensordenados.hasOwnProperty(chave)) 
        {
            // Exibe os valores do array
            console.log(itensordenados[chave]);         

            // Armazena o item em local storage
            // localStorage.setItem(key, objarray[key]);
            localStorage.setItem(
                    contador, 
                    '<td>' + chave + '</td><td>' + itensordenados[chave] + '</td>'
            );
        }
    }*/
        
    CriarTabelaComRegistros(1);
    
    //alert(objarray);
    //alert(data);
    
    /*localStorage.setItem("text1", document.form1.text1.value);
    localStorage.setItem("text2", document.form1.text2.value);
    localStorage.setItem("3", "<b>Valor em Negrito</b>");*/
}

function ObterContagemDeDadosDoServidor(data)
{
    // Obtém o Objeto Json com a resposta do servidor
    var objarray = JSON.parse(data);
        
    $quantidaderegistros = 0;
    
    // Armazenando itens do array JSON vindo dos servidor no array de itens
    for (var key in objarray) {
      
      if (objarray.hasOwnProperty(key))     
      {
         $quantidaderegistros = objarray[key][0]['COUNT(*)'];
         //console.log(objarray[key][0]['COUNT(*)']);
      }
    }
    
    document.getElementById('totalregistros').innerHTML = $quantidaderegistros;
}

function PreencheLocalStoragePorPaginacaoRemotaComUltimoItemDePaginacao(data)
{
    // Obtém o Array Json
    var objarray = JSON.parse(data);
        
    var itenslocalstorage = ObterArrayComTodosOsItensDeLocalStorage();
    
    var itens = [];
    
    var itensordenados = [];
    
    localStorage.clear();

    var contador = 1;

    // Armazenando itens do array JSON vindo dos servidor no array de itens
    for (var key in objarray) {
      
      if (objarray.hasOwnProperty(key))     
      {    
        itens[contador] = { valor : key, descricao : objarray[key] };                
        
        contador++;
      }
    }
    
    var indiceitens = itens.length;
        
    // Armazenando itens do local storage no array de itens
    for(var indice = 1; indice < itenslocalstorage.length; indice++) 
    {    
        itens[indiceitens] = { valor : itenslocalstorage[indice]['valor'], descricao : itenslocalstorage[indice]['descricao'] };                
        
        indiceitens++;
    }
    
    itensordenados = SelectionSort(itens);    
    
    for(var posicao = 1; posicao < itensordenados.length; posicao++) 
    {   
        localStorage.setItem(
            (posicao), 
            '<td>' + itensordenados[posicao]['valor'] + '</td><td>' + itensordenados[posicao]['descricao'] + '</td>'
        );
            
    }
        
    CriarTabelaComRegistros(Math.ceil(localStorage.length / GetValorPaginacao()));    
}

function PreencheLocalStorage(data)
{
    // Obtém o Array Json
    var objarray = JSON.parse(data);
    
    // Exibe no console os elementos do array
    //console.log(objarray);
        
    // Loop through Object and create peopleHTML
    /*for (var key in objarray) {
      if (objarray.hasOwnProperty(key)) {
        console.log(objarray[key]["descricao01"])          
      }
    }*/
    
    var contador = 1;
    
    // Percorre o array JSON
    for (var key in objarray) {
      
      if (objarray.hasOwnProperty(key)) 
      {
        // Exibe os valores do array
        //console.log(objarray[key]);          
        
        // Armazena o item em local storage
        // localStorage.setItem(key, objarray[key]);
        localStorage.setItem(
                contador, 
                '<td>' + key + '</td><td>' + objarray[key] + '</td>'
        );
      }
      
      contador++;
    }
    
    CriarTabelaComRegistros(1);
    
    //alert(objarray);
    //alert(data);
    
    /*localStorage.setItem("text1", document.form1.text1.value);
    localStorage.setItem("text2", document.form1.text2.value);
    localStorage.setItem("3", "<b>Valor em Negrito</b>");*/
}

function GetValorPaginacao()
{
    return 10;
}

function CriarTabelaComRegistros(pagina)
{
    var limitepaginacao = GetValorPaginacao();
    var tabelaregistros = '<table>';

    for(var posicao = ((limitepaginacao * pagina) - (limitepaginacao - 1)); posicao < (pagina * limitepaginacao) + 1; posicao++)
    {
        if(localStorage.getItem(posicao) != null)
        {
            tabelaregistros = tabelaregistros + '<tr>';
            tabelaregistros = tabelaregistros + localStorage.getItem(posicao);
            tabelaregistros = tabelaregistros + '</tr>';    
        }
    }

    tabelaregistros = tabelaregistros + '</table>';

    document.getElementById('resultadoregistros').innerHTML = tabelaregistros;

    //CriarPaginacaoParaLocalStorage(pagina);
    CriarPaginacaoParaRemoteELocalStorage(pagina);
}

function CriarPaginacaoParaRemoteELocalStorage(pagina)
{
    var indicerequisicaoanterior = ObterCodigoItemDeLocalStorageEmArray(localStorage.getItem(1));
    var indicerequisicaoposterior = ((ObterCodigoItemDeLocalStorageEmArray(localStorage.getItem(localStorage.length))) / GetValorPaginacao()) + 1;
    var limitepaginacao = GetValorPaginacao();    
    var indicereferencial = (limitepaginacao * pagina) / limitepaginacao;
    var indiceanterior = indicereferencial - 1;
    var indiceposterior = indicereferencial + 1;
    
    // Se o índice referencial estiver no limite da direita não é necessário existir
    // índice anterior
    if((localStorage.length / limitepaginacao) == indicereferencial && (localStorage.length != limitepaginacao))
    {
        var indiceposterior = 0;
    }
    else
    {
        // Se o tamanho da quantidade de itens da página for igual aovlimite da paginação
        // não é necessário existir índice posterior, nem anterior
        if(localStorage.length == limitepaginacao)
        {    
            var indiceanterior = 0;
            var indiceposterior = 0;
        }    
        else
            // Se o tamanho da quantidade de itens da página for menor que o limite da paginação
            // não é necessário existir índice posterior
            if((localStorage.length / pagina) < limitepaginacao)
            {   
                var indiceposterior = 0;
            }                
    }
    
    var paginacao = '<table><tr>'
        
    if(indiceanterior < 1 && indiceposterior < 1)
    {
        paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indicereferencial + '"></td>';        
    }
    else
        if(indiceanterior < 1 && indiceposterior > 1)
        {
            paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indicereferencial + '" onClick="CriarTabelaComRegistros(' + indicereferencial + ');"></td>';        
            paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indiceposterior + '" onClick="CriarTabelaComRegistros(' + indiceposterior + ');"></td>';        
        }
        else
            if(indiceanterior > 1 && indiceposterior < 1)
            {
                paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indiceanterior + '" onClick="CriarTabelaComRegistros(' + indiceanterior + ');"></td>';        
                paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indicereferencial + '" onClick="CriarTabelaComRegistros(' + indicereferencial + ');"></td>';        
            }
            else
                if(indiceanterior < indicereferencial && indiceposterior > indicereferencial)
                {
                    paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indiceanterior + '" onClick="CriarTabelaComRegistros(' + indiceanterior + ');"></td>';        
                    paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indicereferencial + '" onClick="CriarTabelaComRegistros(' + indicereferencial + ');"></td>';        
                    paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indiceposterior + '" onClick="CriarTabelaComRegistros(' + indiceposterior + ');"></td>';        
                }
                else
                    if(indiceanterior > 0 && indiceposterior < 1)
                    {
                        paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indiceanterior + '" onClick="CriarTabelaComRegistros(' + indiceanterior + ');"></td>';        
                        paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indicereferencial + '" onClick="CriarTabelaComRegistros(' + indicereferencial + ');"></td>';        
                    }
    
    if(parseInt(document.getElementById('totalregistros').innerHTML) != parseInt(localStorage.length))
    {
        paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="Mais resultados do servidor" onClick="FazerRequisicaoAServidorRemotoParaObterValoresPaginadosRestantes(' + indicerequisicaoposterior + ');"></td>';        
    }
    
    paginacao = paginacao + '</tr></table>';
    
    document.getElementById('paginacao').innerHTML = paginacao;
}

function CriarPaginacaoParaLocalStorage(pagina)
{
    var limitepaginacao = GetValorPaginacao();    
    var indicereferencial = (limitepaginacao * pagina) / limitepaginacao;
    var indiceanterior = indicereferencial - 1;
    var indiceposterior = indicereferencial + 1;
    
    // Se o índice referencial estiver no limite da direita não é necessário existir
    // índice anterior
    if((localStorage.length / limitepaginacao) == indicereferencial && (localStorage.length != limitepaginacao))
    {
        var indiceposterior = 0;
    }
    else
    {
        // Se o tamanho da quantidade de itens da página for igual aovlimite da paginação
        // não é necessário existir índice posterior, nem anterior
        if(localStorage.length == limitepaginacao)
        {    
            var indiceanterior = 0;
            var indiceposterior = 0;
        }    
        else
            // Se o tamanho da quantidade de itens da página for menor que o limite da paginação
            // não é necessário existir índice posterior
            if((localStorage.length / pagina) < limitepaginacao)
            {   
                var indiceposterior = 0;
            }                
    }
    
    var paginacao = '<table><tr>'
    
    if(indiceanterior < 1 && indiceposterior < 1)
    {
        paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indicereferencial + '"></td>'        
    }
    else
        if(indiceanterior < 1 && indiceposterior > 1)
        {
            paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indicereferencial + '" onClick="CriarTabelaComRegistros(' + indicereferencial + ');"></td>'        
            paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indiceposterior + '" onClick="CriarTabelaComRegistros(' + indiceposterior + ');"></td>'        
        }
        else
            if(indiceanterior > 1 && indiceposterior < 1)
            {
                paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indiceanterior + '" onClick="CriarTabelaComRegistros(' + indiceanterior + ');"></td>'        
                paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indicereferencial + '" onClick="CriarTabelaComRegistros(' + indicereferencial + ');"></td>'        
            }
            else
                if(indiceanterior < indicereferencial && indiceposterior > indicereferencial)
                {
                    paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indiceanterior + '" onClick="CriarTabelaComRegistros(' + indiceanterior + ');"></td>'        
                    paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indicereferencial + '" onClick="CriarTabelaComRegistros(' + indicereferencial + ');"></td>'        
                    paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indiceposterior + '" onClick="CriarTabelaComRegistros(' + indiceposterior + ');"></td>'        
                }
                else
                    if(indiceanterior > 0 && indiceposterior < 1)
                    {
                        paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indiceanterior + '" onClick="CriarTabelaComRegistros(' + indiceanterior + ');"></td>'        
                        paginacao = paginacao + '<td><input type="button" id="registro" name="registro" value="' + indicereferencial + '" onClick="CriarTabelaComRegistros(' + indicereferencial + ');"></td>'        
                    }
    
    paginacao = paginacao + '</tr></table>';
    
    document.getElementById('paginacao').innerHTML = paginacao;
}

function PaginarRegistro()
{
    
}

function enviaTesteConexao() {
   $.ajax({
      url:'index.php?servico=dbtest',
      dataType : 'html',
      type : 'GET',      
      complete: function (response) {
         alert(response.responseText);
      },
      error: function () {
          alert('Erro');
      }
  });  

  return false;
}