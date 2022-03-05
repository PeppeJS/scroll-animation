let boxes = document.querySelectorAll('.box');

// MI VADO A PRENDERE L'EVENTO window PER LO SCROLL
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  // MI VADO A PRENDERE L'ALTEZZA DELLA FINESTRA E LA DIVIDO IN BASE ALLA
  // LARGHEZZA DEL CONTENUTO DELL'ELEMENTO (FARE UN PICCOLO CALCOLO)
  let triggerPoint = (window.innerHeight / 5) * 4;

  boxes.forEach((value) => {
    // MI VADO A PRENDERE IL VALORE DELL'ELMENTO (box) IN PARTICOLARE
    // LA SUA DIMENZIONE E LA SUA POSIZIONE RISPETTO AL "VIEWPORT"
    let boxTop = value.getBoundingClientRect().top;

    // INZIO I CHECKS QUANDO SCROLLO VERSD L'ALTO E VERSO IL BASSO (AGG O RIM LA CLASSE)
    if (boxTop < triggerPoint) {
      value.classList.add('show');
    } else {
      value.classList.remove('show');
    }
  });
}
