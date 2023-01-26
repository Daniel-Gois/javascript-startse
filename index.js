document.querySelector('#t1').textContent = 'JavaScript - Introdução';
document.querySelector('#t2').textContent = 'JavaScript - Teste';


alert('Olá! Seja Bem Vindo!');
document.write('Essa é nossa primeira vídeo aula.');

const nome = prompt('Qual é o seu nome?');
alert('Que bom ter você aqui ${nome}! \n Vamos começar?');


//Apresentar uma mensagem e esconde o form de login


function bemVindo(){
    const nome = document.querySelector('#nomeUsuario').Value;
    alert('Olá ${nome}! seja bem vindo!')
    document.getElementById('formularioLogin').style.display = 'none';
}


function mudaCorFundo(){
    const menu = document.querySelector('#coresFundo');
    const cor = menu.options[menu.selectedIndex].value;
    document.body.style.background = cor;
}

