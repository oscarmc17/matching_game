const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  // isMatch ? disableCards() : unflipCards();

  if(isMatch){
    disableCards();
  } else {
    unflipCards();
  }

  // if (isMatch === true) {
  //     cards.style.backgroundColor = "green";

  //   disableCards();
  // } else {
  //   //  cards.style.backgroundColor = "red";
  //   unflipCards();
  // }

  // if (isMatch) {
  //   cards.style.backgroundColor = "green";
  // }

  // if (isMatch) {
  //     //  document.body.style.backgroundColor = 'green';
  //      setTimeout(() => {
  //        document.body.style.backgroundColor = "green";
  //         disableCards();
  //       }, 1000);

  // } else {
  //     unflipCards();
  // }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false][(firstCard, secondCard)] = [
    null,
    null,
  ];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

// gsap.to(".memory-card.flip", { rotation: 27, x: 100, duration: 1 });

// gsap.to(".memory-card.flip", { rotation: 27, x: 100, duration: 1 });

// let tl = gsap.timeline();
//     tl.to(".memory-card.flip", { rotation: 180 });
