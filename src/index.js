const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

const pairsClicked = document.getElementById("pairs-clicked");
const pairsGuessed = document.getElementById("pairs-guessed");

function updateScores() {
  pairsClicked.innerText = memoryGame.pairsClicked;
  pairsGuessed.innerText = memoryGame.pairsGuessed;
         
}

memoryGame.shuffleCards();

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  setTimeout(memoryGame.showCards, 1000);
  
  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here

      updateScores();

      card.classList.toggle("turned");
      memoryGame.pickedCards.push(card);
      const arrLen = memoryGame.pickedCards.length;

      if (arrLen > 0 && arrLen % 2 === 0) {

        const card1 = memoryGame.pickedCards[arrLen - 2];
        const card2 = memoryGame.pickedCards[arrLen - 1];

        if (
          memoryGame.checkIfPair(
            card1.dataset["cardName"],
            card2.dataset["cardName"]
          )
        ) {
          updateScores();
          if (memoryGame.checkIfFinished()) {
            setTimeout(function () {
              alert("Congrats!! You won, page is gonna reload now!");
              location.reload();
            }, 1000);
          }
        } else {
          updateScores();

          setTimeout(function () {
            card1.classList.toggle("turned");
            card2.classList.toggle("turned");
          }, 1000);
        }
      }

    });
  }); 
});
