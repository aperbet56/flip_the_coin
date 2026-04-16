// Récupération des éléments HTML5
const flipBtn = document.querySelector(".container__btn");
const result = document.querySelector(".container__result");
const coin = document.querySelector("#coin");

// Déclaration de la fonction flipCoin qui va permettre de gérer le lancer de la pièce
const flipCoin = () => {
  coin.classList.remove("flip");

  setTimeout(() => {
    // Déclaration de la constante randomNumber
    const randomNumber = Math.random(); // Math.random() renvoie un nombre compris dans l'intervalle [0, 1[ (ce qui signifie que 0 est compris dans l'intervalle mais que 1 en est exclu)
    console.log(randomNumber);

    // Déclaration de la constante isHeads
    const isHeads = `${randomNumber}` < 0.5;
    console.log(isHeads);

    // Ternaire condition if...else
    coin.src = isHeads ? "img/heads.svg" : "img/tails.svg";

    // Ternaire condition if...else
    result.textContent = `${isHeads ? "Heads" : "Tails"}`;

    coin.classList.add("flip");
  }, 100);
};

// Ecoutes des événements "click" et appel de la fonction flipCoin
flipBtn.addEventListener("click", flipCoin);
coin.addEventListener("click", flipCoin);
