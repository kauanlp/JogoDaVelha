var letra = "X";
 
var letraNum = new Array(9);

function Jogada(quadradoN,n){
    var verificaJogada = document.getElementById(quadradoN).innerText;

    if(verificaJogada == "X" || verificaJogada == "O"){
        alert("Essa quadrado ja foi selecionado");    
     }else{
        document.getElementById(quadradoN).innerText = letra;
        if(letra == "X"){
            letraNum[n] = 1;
            document.getElementById('letra').innerText = "O";            
            letra = "O";
        }else{
            letraNum[n] = 2;
            document.getElementById('letra').innerText = "X";            
            letra = "X";     
        }
    }
 verificaJogada();
}

function verificaJogada(){
    
    var verificaVencedor = new Array(8);
        
    verificaVencedor[0] = letraNum[0]*letraNum[1]*letraNum[2];
    verificaVencedor[1] = letraNum[3]*letraNum[4]*letraNum[5];
    verificaVencedor[2] = letraNum[6]*letraNum[7]*letraNum[8];
        
    verificaVencedor[3] = letraNum[0]*letraNum[3]*letraNum[6];
    verificaVencedor[4] = letraNum[1]*letraNum[4]*letraNum[7];
    verificaVencedor[5] = letraNum[2]*letraNum[5]*letraNum[8];
        
    verificaVencedor[6] = letraNum[0]*letraNum[4]*letraNum[8];
    verificaVencedor[7] = letraNum[2]*letraNum[4]*letraNum[6];

    for(i = 0; i <= 8; i++){
        if(verificaVencedor[i] == 1){
            alert("Jogador 1 (X) é o vencedor, parabéns!");  
            zerar();             
        }else{
            if(verificaVencedor[i] == 8){
                alert("Jogador 2 (O) é o vencedor, parabéns!");  
                zerar();  
            }
        } 
    }
}

function zerar(){
    window.location.reload()
}
