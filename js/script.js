import peliculas from './peliculas.js'


const accion = []
const thriller = []
const aventura = []

peliculas.forEach(pelicula => {
    pelicula.genre_ids.forEach(genre_ids => {
        if (genre_ids === 28) accion.push(pelicula);
        if (genre_ids === 53) thriller.push(pelicula);
        if (genre_ids === 12) aventura.push(pelicula);
    });
});


// ACCION

const divAccion = document.getElementById("genero-28")

console.log(divAccion)

accion.forEach(pelicula => {
      divAccion.innerHTML += `<div class="peli">
        <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.original_title}">
        <h3>${pelicula.original_title}</h3>
      </div>`;
    });

// THRILLER

  const divThriller = document.getElementById("genero-53")

    thriller.forEach(pelicula => {
      divThriller.innerHTML += `<div class="peli">
        <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.original_title}">
        <h3>${pelicula.original_title}</h3>
      </div>`;
    });

// AVENTURA


  const divAventura = document.getElementById("genero-12")
   
    aventura.forEach(pelicula => {
      divAventura.innerHTML += `<div class="peli">
        <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.original_title}">
        <h3>${pelicula.original_title}</h3>
      </div>`;
    });