const dom = require("./createElementDom");
class Card {
  constructor(path, header, position, description, type) {
    this.path = path;
    this.header = header;
    this.position = position;
    this.description = description;
    this.type = type;
  }
}

const cardDraw = (card) => {
  const cardHtml = dom.createElemDOM("div", "card");
  const img = cardHtml.appendChild(dom.createElemDOM("img", "card__img"));
  img.src = card.path;
  img.alt = card.header;
  const description = cardHtml.appendChild(
    dom.createElemDOM("div", "card__descr")
  );
  description.appendChild(dom.createElemDOM("h4", "text-btn", card.header));
  description.appendChild(
    dom.createElemDOM("p", "smallParagraph", card.position)
  );
  description.appendChild(
    dom.createElemDOM("p", "text-body", card.description)
  );
  description.appendChild(
    dom.createElemDOM(
      "span",
      `card__icon ${card.type == "meat" ? "card__icon_meat" : "card__icon_veg"}`
    )
  );
  return cardHtml;
};

const listOfPets = [];
const initArr = () => {
  listOfPets.push(
    new Card(
      require("../images/pets-panda.png"),
      "giant Pandas",
      "Native to Southwest China",
      "Description of .....",
      "veg"
    )
  );
  listOfPets.push(
    new Card(
      require("../images/pets-eagle.png"),
      "eagles",
      "Native to South America",
      "Description of .....",
      "meat"
    )
  );

  listOfPets.push(
    new Card(
      require("../images/pets-gorilas.png"),
      "gorillas",
      "Native to Congo",
      "Description of .....",
      "veg"
    )
  );
  listOfPets.push(
    new Card(
      require("../images/export-sloth.png"),
      "Two-toed Sloth",
      "Mesoamerica, South America",
      "Description of .....",
      "veg"
    )
  );

  listOfPets.push(
    new Card(
      require("../images/export-cheetahs.png"),
      "cheetahs",
      "Native to Africa",
      "Description of .....",
      "meat"
    )
  );
  listOfPets.push(
    new Card(
      require("../images/pets-penguin.png"),
      "Penguins",
      "Native to Antarctica",
      "Description of .....",
      "meat"
    )
  );

  listOfPets.push(
    new Card(
      require("../images/gorillas.png"),
      "Gorillas",
      "Native to Congo",
      "Description of .....",
      "veg"
    )
  );
  listOfPets.push(
    new Card(
      require("../images/aligator.png"),
      "Alligators",
      "Native to Southeastern United States",
      "Description of .....",
      "meat"
    )
  );

  listOfPets.push(
    new Card(
      require("../images/lion.jpg"),
      "Liions",
      "Native to Africa",
      "Description of .....",
      "meat"
    )
  );
  listOfPets.push(
    new Card(
      require("../images/bear.jpg"),
      "Bears",
      "Native to Russia",
      "Description of .....",
      "meat"
    )
  );

  listOfPets.push(
    new Card(
      require("../images/lama.jpg"),
      "Lamas",
      "Native to Southeastern United States",
      "Description of .....",
      "veg"
    )
  );
  listOfPets.push(
    new Card(
      require("../images/manul.jpg"),
      "manuls",
      "Native to Asia",
      "Description of .....",
      "meat"
    )
  );
};

let prevarr = [];
let btnL;
let btnR;
const generateNums = (nums) => {
  const gen = () => Math.floor(Math.random() * (listOfPets.length - 0));

  const arr = [];
  do {
    const curr = gen();
    if (!arr.includes(curr) && !prevarr.includes(curr)) arr.push(curr);
  } while (arr.length != nums);
  prevarr = arr;
  return arr;
};

const generateCards = () => {
  const cards = dom.createElemDOM("div", "cards");
  generateNums(6).forEach((num) =>
    cards.appendChild(cardDraw(listOfPets[num]))
  );
  return cards;
};

currentItem = 0;
let items = [];
function hideItem(direction) {
  isEnabled = false;
  console.log("hide", currentItem);
  items[0].classList.add(direction);
  items[0].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
    this.remove();
  });
}
function showItem(direction) {
  console.log("show", currentItem);
  items[1].classList.add("active", direction);
  items[1].addEventListener("animationend", function () {
    this.classList.remove(direction);

    isEnabled = true;
    btnL.removeAttribute("disabled");
    btnR.removeAttribute("disabled");
  });
}

function previousItem() {
  items = document.querySelectorAll(".cards");
  hideItem("to-right");
  //   changeCurrentItem();
  //   changeCurrentItem(n - 1);
  showItem("from-left");
}
function nextItem() {
  items = document.querySelectorAll(".cards");
  hideItem("to-left");
  //   changeCurrentItem();
  //   changeCurrentItem(n + 1);
  showItem("from-right");
}

document.addEventListener("DOMContentLoaded", () => {
  initArr();
  const carousel = document.querySelector(".carousel__container");

  btnR = document.querySelector(".btn_round_right");
  btnL = document.querySelector(".btn_round_left");

  carousel.appendChild(generateCards());

  document.querySelector(".cards").classList.add("active");

  let isEnabled = true;

  btnL.addEventListener("click", function () {
    btnL.setAttribute("disabled", "disabled");
    btnR.setAttribute("disabled", "disabled");
    if (isEnabled) {
      carousel.appendChild(generateCards());
      previousItem();
    }
  });
  btnR.addEventListener("click", function () {
    btnL.setAttribute("disabled", "disabled");
    btnR.setAttribute("disabled", "disabled");
    if (isEnabled) {
      carousel.appendChild(generateCards());
      nextItem();
    }
  });
});
