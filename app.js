const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "burger",
    img: "images/burger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice",
    img: "images/ice.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "burger",
    img: "images/burger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice",
    img: "images/ice.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];
console.log(cardArray);

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardChosen = [];
let cardChosenId = [];
const cardsWon = [];

function createBoard() {
  for (i = 0; i <= 11; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.addEventListener("click", flipCard);
    card.setAttribute("data-id", i);

    grid.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  console.log("Check fo match");
  if (cardChosen[0] == cardChosen[1]) {
    alert("found a match");
    cards[cardChosenId[0]].setAttribute("src", "images/white.png");
    cards[cardChosenId[1]].setAttribute("src", "images/white.png");
    cardsWon.push(cardChosen);
  } else {
    cards[cardChosenId[0]].setAttribute("src", "images/blank.png");
    cards[cardChosenId[1]].setAttribute("src", "images/blank.png");
    alert("Sorry try again");
  }

  resultDisplay.textContent = cardsWon.length;
  cardChosen = [];
  cardChosenId = [];

  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "congratulation you found them all";
  }
}

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);

  console.log(cardChosen);
  console.log(cardChosenId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
