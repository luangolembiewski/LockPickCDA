var chave = document.querySelector('.chave');
var titulo = document.getElementById('titulo')
var tempo = document.getElementById('tempo')
var chaveHorizontal = document.getElementById("ch");
var barraTempo = document.querySelector('.barra-tempo');
const somAlarme = document.querySelector('.som-alarme');
const somPino = document.querySelector('.som-pino');
var x=0;
var w = false;
var margemErro=3;
var posicao;
var pino = [document.getElementById("pino1")
    ,document.getElementById("pino2")
    ,document.getElementById("pino3")
    ,document.getElementById("pino4")
    ,document.getElementById("pino5")
    ,document.getElementById("pino6")
    ,document.getElementById("pino7")
    ,document.getElementById("pino8")
    ,document.getElementById("pino9")
    ,document.getElementById("pino10")]

//posição pinos
var pp = [29,77,125,173,221,269,317,365,413,461]


document.addEventListener('keydown' , iniciar);

function iniciar(){
    time()
    chaveHorizontal.classList.add('chave-horizontal')
    document.removeEventListener('keydown' , iniciar);
    barraTempo.classList.add('animacao-tempo')
    document.addEventListener('keydown' , clicou);
}

function time(){
    setTimeout(function() {
        if (barraTempo.clientWidth>0&w==false) { 
            tempo.innerText = ((barraTempo.clientWidth/4.5)/2.5).toFixed(0)+"s"
            time();
        }else if(w==false){
            console.log("Fim");
            chaveHorizontal.classList.remove('chave-horizontal')
            document.removeEventListener('keydown' , clicou)
            chaveHorizontal.style.left = '460px'
            somAlarme.play() 
            somAlarme.volume = 0.1
            somAlarme.controls = true
        }
    }, 500)
}

const clicou = () => {
    chave.classList.add('click');
    posicao=(chaveHorizontal.offsetLeft)
    //adm();
    for(var c=0;c<pp.length;c++){
        if(posicao>pp[c]-margemErro&posicao<pp[c]+(margemErro*4)){
            pino[c].classList.add('movimento-pino');
            console.log(c +" subiu");
            somPino.play() 
            somPino.volume = 0.5
            setTimeout(()=>{
                win()
            }, 550);
        }  
    }
    setTimeout(()=>{
        chave.classList.remove('click'); 
    }, 300);
    document.removeEventListener('keydown' , clicou)
    setTimeout(function(){
        document.addEventListener('keydown' , clicou)
    },400);
}

function win(){
    // for(var c=0;c<pp.length;c++){
    //     console.log(pino[c].offsetTop) 
    // }
     
    if(pino[0].offsetTop==90 & pino[1].offsetTop==90 &
        pino[2].offsetTop==90 & pino[3].offsetTop==90 &
        pino[4].offsetTop==90 & pino[5].offsetTop==90 &
        pino[6].offsetTop==90 & pino[7].offsetTop==90 &
        pino[8].offsetTop==90 & pino[9].offsetTop==90
    ){
        w=true
        titulo.innerText="DESTRAVADO!"
        chaveHorizontal.classList.remove('chave-horizontal')
        document.removeEventListener('keydown' , clicou)
        chaveHorizontal.style.left = '460px'
        var tp = "width:"+barraTempo.clientWidth+"px"
        barraTempo.classList.remove('animacao-tempo')
        barraTempo.setAttribute("style",tp)
    }
}

function Refresh(){
    window.location.reload();
}




function adm(){
    posicao=0
    for(var c=0;c<pp.length;c++){
        pino[c].classList.add('movimento-pino'); 
    }
    setTimeout(()=>{
        win()
    }, 550);
}
