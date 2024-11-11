import peliculas from './peliculas.js'

console.log(peliculas)

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

console.log(accion)
console.log(thriller)
console.log(aventura)

// ACCION

const divAccion = document.querySelectorAll("#genero-28")

divAccion.forEach(div => {

    accion.forEach(pelicula => {
      div.innerHTML += `<div class="peli">
        <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.original_title}">
        <h3>${pelicula.original_title}</h3>
      </div>`;
    });
  });

// THRILLER

  const divThriller = document.querySelectorAll("#genero-53")

divThriller.forEach(div => {
    
    thriller.forEach(pelicula => {
      div.innerHTML += `<div class="peli">
        <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.original_title}">
        <h3>${pelicula.original_title}</h3>
      </div>`;
    });
  });

// AVENTURA


  const divAventura = document.querySelectorAll("#genero-12")

divAventura.forEach(div => {
    
    aventura.forEach(pelicula => {
      div.innerHTML += `<div class="peli">
        <img src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.original_title}">
        <h3>${pelicula.original_title}</h3>
      </div>`;
    });
  });