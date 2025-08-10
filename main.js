// --- SLIDER CON DESLIZAMIENTO Y BOTONES ---
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

if (slidesContainer && slides.length > 0) {
  function updateSlide() {
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      updateSlide();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      updateSlide();
    });
  }

  // Auto-slide
  setInterval(() => {
    index = (index + 1) % slides.length;
    updateSlide();
  }, 6000);
}

// --- PRELOADER ---
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  // Espera 1.2 segundos antes de ocultarlo
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 1); //1800
});
document.addEventListener("DOMContentLoaded", () => {
  const comentarios = [
    {usuario: "YoSiQuieroTuCaramelo ", texto: "Qué fuerte... no puedo creer que algo así pase en nuestra ciudad."},
    {usuario: "TucaraMundo88", texto: "Minerva era una leyenda en la comunidad hacker. Esto no quedará así."},
    {usuario: "TorterraFan", texto: "¿Dónde estaba la policía cuando realmente se le necesitaba?"},
    {usuario: "JugadordeClashRoyale", texto: "Esto tiene que ver con algo mucho más grande, huele a conspiración."},
    {usuario: "PanchitoGamer777", texto: "Impresionante el nivel de seguridad de sus equipos, esto va a dar que hablar."},
    {usuario: "CoronelLeoncioPrado", texto: "Que descanse en paz... y que encuentren a los culpables."},
    {usuario: "AbbyJugandoFree", texto: "Esto es solo la punta del iceberg. Hay secretos que no quieren que sepamos."},
    {usuario: "StayMapero", texto: "Increíble reportaje, gracias por mantenernos informados."}
  ];

  const avatars = [
    "https://i.pravatar.cc/40?img=1",
    "https://i.pravatar.cc/40?img=2",
    "https://i.pravatar.cc/40?img=3",
    "https://i.pravatar.cc/40?img=4",
    "https://i.pravatar.cc/40?img=5",
    "https://i.pravatar.cc/40?img=6"
  ];

  const contenedor = document.getElementById("comments-container");

 if (contenedor) {
  comentarios.sort(() => Math.random() - 0.5);
  comentarios.slice(0, 5).forEach(c => {
    const avatar = avatars[Math.floor(Math.random() * avatars.length)];
    const horas = Math.floor(Math.random() * 24) + 1;

    const div = document.createElement("div");
    div.classList.add("comment-item");
    div.innerHTML = `
      <img class="avatar" src="${avatar}" alt="${c.usuario}">
      <div class="comment-body">
        <div class="comment-header">
          <span class="name">${c.usuario}</span>
          <span class="dot">•</span>
          <span class="time">Hace ${horas}h</span>
        </div>
        <p class="comment-text">${c.texto}</p>
      </div>
    `;
    contenedor.appendChild(div);
  });
}

});
