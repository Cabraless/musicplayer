let musicas = [
  {titulo:'Cacife Clandestino', artista:'Felp22', source:'musicas/y2meta.com - Felp 22 - Melhor Momento (Álbum Completo) (128 kbps) (1).mp3', img:'imagens/2cdf433f606eb589948229dabd194e7f.jpg'},
  {titulo:'Hip', artista:'Classicas', source:'musicas/y2meta.com - BEST HIPHOP MIX - 50 Cent, Method Man, Ice Cube , Snoop Dogg , The Game and more (128 kbps) (1).mp3', img:'imagens/73d5f976fd4ed8bafcff08ae6ad4bd7a.jpg'},
  {titulo:'Peaky', artista:'Blinder', source:'musicas/y2meta.com - Songs that make you feel like Thomas Shelby (128 kbps).mp3', img:'imagens/e7d9f4c5130889ade6300a0522c0f9d2.jpg'},
  {titulo:'Playlist', artista:'Poze do Rodo', source:'musicas/y2meta.com - MC POZE - AS MELHORES DE 2022 ( PLAYLIST MC POZE ) AS MAIS TOCADAS (128 kbps).mp3', img:'imagens/37i9dQZF1DZ06evO1d7Y1E-large.jpg'},
]

// INICIO
let musica = document.querySelector('audio');
let musicaIndex = 0;

let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
let imagem = document.querySelector('img');
let tempoDecorrido = document.querySelector('.tempo .inicio');
let duracaoMusica = document.querySelector('.tempo .fim');

nomeMusica.textContent = musicas[musicaIndex].titulo;
nomeArtista.textContent = musicas[musicaIndex].artista;
imagem.setAttribute('src', musicas[musicaIndex].img);
duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

// EVENTOS
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
  musicaIndex--; 
  if (musicaIndex < 0){
      musicaIndex = 3;
  }
  renderizarMusica(musicaIndex);
});

document.querySelector('.proximo').addEventListener('click', () => {
  musicaIndex++;
  if (musicaIndex > 2){
      musicaIndex = 0;
  }
  renderizarMusica(musicaIndex);
});

// FUNÇÕES

function renderizarMusica(musicaIndex){
  musica.setAttribute('src', musicas[musicaIndex].source);

  musica.addEventListener('loadeddata', () => {
      nomeMusica.textContent = musicas[musicaIndex].titulo;
      nomeArtista.textContent = musicas[musicaIndex].artista;
      imagem.src = musicas[musicaIndex].img;
  
      duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
  });

  document.body.append(musica);
}

function tocarMusica(){
  musica.play();
  document.querySelector('.botao-play').style.display = 'none';
  document.querySelector('.botao-pause').style.display = 'block';
}

function pausarMusica(){
  musica.pause();
  document.querySelector('.botao-play').style.display = 'block';
  document.querySelector('.botao-pause').style.display = 'none';
}

function segundosParaMinutos(segundos){
  let campoMinutos = Math.floor(segundos / 60);
  let campoSegundos = segundos % 60;

  if (campoSegundos < 10){
      campoSegundos = '0'+ campoSegundos;
  }
  return `${campoMinutos}:${campoSegundos}`;
}

function atualizarBarra(){
  let barra = document.querySelector('progress');
  barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%';
  tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}
// FUNÇÕES

function renderizarMusica(musicaIndex){
    musica.setAttribute('src', musicas[musicaIndex].source);

    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[musicaIndex].titulo;
        nomeArtista.textContent = musicas[musicaIndex].artista;
        imagem.src = musicas[musicaIndex].img;
    
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });

    document.body.append(musica);
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';
    document.querySelector('.botao-pause').style.display = 'block';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if (campoSegundos < 10){
        campoSegundos = '0'+ campoSegundos;
    }
    return `${campoMinutos}:${campoSegundos}`;
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%';
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}
