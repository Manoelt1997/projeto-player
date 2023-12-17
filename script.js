let musicas = [
    {
        titulo: 'Memórias',
        artista: 'Ac.Azo',
        src:'musicas/360ytmp3.com_320kbps-banda-ac-azo-memorias.mp3',
        img: 'img/memorias.jpg'
    },
    {
        titulo: 'Get You',
        artista: 'Daniel Caesar',
        src:'musicas/Get You (feat. Kali Uchis)_WFLGrpGemLg.mp3',
        img: 'img/get-you.jpg'
    },
    {
        titulo: 'Oh Love',
        artista: 'Four Leaf Clover',
        src:'musicas/Oh Love_sMo99yP9rBk.mp3',
        img: 'img/ohlove.jpg'
    }
];

let musica = document.querySelector('audio');
let indexMusica = 0;
let tempoFinalizado = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

// Eventos

document.querySelector('.play').addEventListener('click', tocamusica);
document.querySelector('.pause').addEventListener('click', pausamusica);
musica.addEventListener('timeupdate', atualizarBarra);
document.querySelector('.anterior').addEventListener('click', () =>{
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
    musica.play();
});

document.querySelector('.proximo').addEventListener('click', () =>{
    indexMusica++;
    if(indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    musica.play();
});

// Funções

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        tempoFinalizado.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocamusica (){
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
}

function pausamusica (){
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinuto = Math.floor(segundos / 60);
    let campoSegundo = segundos % 60
    if(campoSegundo < 10){
        campoSegundo = '0' + campoSegundo;
    }

    return campoMinuto+ ':' +campoSegundo;
}

