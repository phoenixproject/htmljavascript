<!DOCTYPE HTML>
<html>
    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <meta name="description" content="">
        <meta name="author" content="">
        
        <title>Local storage</title>
        
        <!-- JQuery -->
        <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
        
        <!-- Requisição -->
        <script type="text/javascript" src="js/util.js"></script>
        
        <script type="text/javascript">

            function AssignValues()
            {
                localStorage.setItem("text1", document.formLocalStorage.text1.value);
                localStorage.setItem("text2", document.formLocalStorage.text2.value);
                localStorage.setItem("3", "<b>Valor em Negrito</b>");
            }

            function Value1()
            {
                alert("Value 1 is " + localStorage.getItem("text1"));
            }

            function Value2()
            {
                alert("Value 2 is " + localStorage.getItem("text2"));
            }

            function Value3()
            {
                alert("Value 3 is " + localStorage.getItem("3"));
            }

            function ShowLength()
            {
                alert("No of items in local storage is " + localStorage.length);
            }

            function ClearLocalStorage()
            {
                localStorage.clear();
                alert("No of items in local storage is " + localStorage.length);
            }
            
            function ClearSessionStorage()
            {
                sessionStorage.clear();
                alert("No of items in local storage is " + sessionStorage.length);
            }
        </script>
    </head>

    <body>
        
        <form name="formLocalStorage">
        
            <input type="text" name="text1" placeholder="Enter text...">
            <br>
            
            <input type="text" name="text2" placeholder="Enter text...">
            <br>
            
            <input type="text" name="text3" placeholder="Enter text...">
            <br>
            
            <input type="button" value="Assign values" onClick="AssignValues()">
            <br>
            
            <input type="button" value="Show value 1" onClick="Value1()">
            <br>
            
            <input type="button" value="Show value 2" onClick="Value2()">
            <br>
            
            <input type="button" value="Show value 3" onClick="Value3()">
            <br>
            
            <input type="button" value="Show length" onClick="ShowLength()">
            <br>
            
            <input type="button" value="Clear session storage" onClick="ClearSessionStorage()">
            <input type="button" value="Clear local storage" onClick="ClearLocalStorage()">
            <br>
            
            <input type="button" value="Obter Quantidade de Dados no Servidor" onClick="ObterQuantidadeDeDadosNoServidor()">
            <br>
            
            <input type="button" id="click-me" value="Preencher Banco de Dados" onClick="PreencherBancoDeDados()"/>
            
            <input type="button" value="Preenche Local Storage com valores iniciais do servidor (obter paginado)" onClick="ObterValoresPaginadosDeBancoDeDados()"/>
            <br>  
            
            <input type="button" value="Preenche Local Storage com limite de paginação configurada no servidor (obter paginado)" onClick="FazerRequisicaoAServidorRemotoParaObterValoresPaginadosRestantes(1)"/>
            <br>  
            
            <input type="button" value="Testar Método" onClick="ObterArrayComTodosOsItensDeLocalStorage()"/>
            <br>  
            
            <div id="resultadoregistros"></div>
            <br>  
            <div id="paginacao"></div>
            <br>  
            
            <div id="totalregistros"></div>
            <br>  
            
            <div class="loading-spinner">
                <svg id="hourglass" width='64px' height='64px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-hourglass"><rect x="0" y="0" width="100" height="100" fill="none" class="bk">
                    
                </rect>
                    <g>
                        <path fill="none" stroke="#007282" stroke-width="5" stroke-miterlimit="10" d="M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z" class="glass">

                        </path>
                        <clipPath id="uil-hourglass-clip1">
                            <rect x="15" y="20" width="70" height="25" class="clip">
                                <animate attributeName="height" from="25" to="0" dur="1s" repeatCount="indefinite" vlaues="25;0;0" keyTimes="0;0.5;1">                                
                                </animate>
                                <animate attributeName="y" from="20" to="45" dur="1s" repeatCount="indefinite" vlaues="20;45;45" keyTimes="0;0.5;1">                            
                                </animate>
                            </rect>
                        </clipPath>
                        <clipPath id="uil-hourglass-clip2">
                            <rect x="15" y="55" width="70" height="25" class="clip">
                                <animate attributeName="height" from="0" to="25" dur="1s" repeatCount="indefinite" vlaues="0;25;25" keyTimes="0;0.5;1">                            
                                </animate>
                                <animate attributeName="y" from="80" to="55" dur="1s" repeatCount="indefinite" vlaues="80;55;55" keyTimes="0;0.5;1">                            
                                </animate>
                            </rect>
                        </clipPath>
                        <path d="M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z" clip-path="url(#uil-hourglass-clip1)" fill="#ffab00" class="sand">                        
                        </path>
                        <path d="M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z" clip-path="url(#uil-hourglass-clip2)" fill="#ffab00" class="sand">                        
                        </path>
                        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="180 50 50" repeatCount="indefinite" dur="1s" values="0 50 50;0 50 50;180 50 50" keyTimes="0;0.7;1">                            
                        </animateTransform>
                    </g>
                </svg>
            </div>
            
        </form>
    </body>
</html>