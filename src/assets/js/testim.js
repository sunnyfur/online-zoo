const dom = require("./createElementDom");
const main = require("./menu");
class FeedBack {
  constructor(path, name, position, when, text) {
    this.path = path;
    this.name = name;
    this.position = position;
    this.when = when;
    this.text = text;
  }
}

const handleClose = (e) => {
  e.stopPropagation();
  main.toggleShadow();

  const parent = document.querySelector(".popup");
  parent.classList.remove("active");
  parent.querySelector(".card").remove();
};

const showPopup = (e, card) => {
  e.stopPropagation();
  main.toggleShadow();
  const popup = document.querySelector(".popup");
  popup.appendChild(cardTestDraw(card));
  popup.classList.add("active");
  let x = window.innerWidth / 2 - popup.offsetWidth / 2;
  let y = Math.round(
    document.documentElement.scrollTop + popup.offsetHeight / 2
  );

  popup.style.left = x + "px";
  popup.style.top = y + "px";
  const shadow = document.querySelector(".body_shadow");
  if (shadow) {
    console.log("sh1");
    shadow.addEventListener("click", handleClose, { once: true });
  }
};

const cardTestDraw = (card) => {
  const cardHtml = dom.createElemDOM("div", "card");
  const img = cardHtml.appendChild(dom.createElemDOM("img", "card_ava"));
  img.src = card.path;
  img.alt = "photo";
  const title = dom.createElemDOM("div", "card__title");
  cardHtml.appendChild(title);
  title.appendChild(dom.createElemDOM("p", "subtitle", card.name));
  const wrapper = dom.createElemDOM("div", "title__wrapper");
  title.appendChild(wrapper);
  wrapper.appendChild(dom.createElemDOM("p", "smallParagraph", card.position));
  wrapper.appendChild(dom.createElemDOM("p", "smallParagraph", "•"));
  wrapper.appendChild(dom.createElemDOM("p", "smallParagraph", card.when));
  cardHtml.appendChild(
    dom.createElemDOM("p", "smallParagraph card__text", card.text)
  );

  return cardHtml;
};

const listOfTestim = [];
const initArrTestim = () => {
  listOfTestim.push(
    new FeedBack(
      require("../../assets/images/ava_default.svg"),
      "Michael John",
      "Local Austria",
      "Today",
      `The best online zoo I’ve met. My son delighted very much
      ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The
      best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is
      one jf the ways to instill a love for animals.<br>
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo
      is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son
      delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love
      for animals.`
    )
  );

  listOfTestim.push(
    new FeedBack(
      require("../../assets/images/Oscar.png"),
      "Oskar Samborsky",
      "Local Austria",
      "Yesterday",
      `Online zoo is one jf the ways to instill a love for
      animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
      Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My
      son delighted very much ljves to watch gouillas.<br>
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo
      is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son
      delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love
      for animals.<br><br>

      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo
      is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son
      delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love
      for animals.`
    )
  );

  listOfTestim.push(
    new FeedBack(
      require("../../assets/images/Fredericka.png"),
      "Fredericka Michelin",
      "Local Austria",
      "Yesterday",
      `The best online zoo I’ve met. My son delighted very much
      ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The
      best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is
      one jf the ways to instill a love for animals.<br>
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo
      is one jf the ways to instill a love for animals.The best online zoo I’ve met.<br>
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo
      is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son
      delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love
      for animals.`
    )
  );

  listOfTestim.push(
    new FeedBack(
      require("../../assets/images/Mila.png"),
      "Mila Riksha",
      "Local Austria",
      "Yesterday",
      `My son delighted very much ljves to watch gouillas. Online
      zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son
      delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love
      for animals.The best online zoo I’ve met. My son delighted very much ljves to watch
      gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo
      I’ve met. My son delighted very much ljves to watch gouillas.<br>
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo
      is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son
      delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love
      for animals.`
    )
  );

  listOfTestim.push(
    new FeedBack(
      require("../../assets/images/osca.png"),
      "Oska Samborska",
      "Local Austria",
      "Yesterday",
      ` Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
    )
  );

  listOfTestim.push(
    new FeedBack(
      require("../../assets/images/osca.png"),
      "Oska Samborska",
      "Local Austria",
      "Yesterday",
      ` Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
    )
  );

  listOfTestim.push(
    new FeedBack(
      require("../../assets/images/osca.png"),
      "Oska Samborska",
      "Local Austria",
      "Yesterday",
      ` Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
    )
  );

  listOfTestim.push(
    new FeedBack(
      require("../../assets/images/osca.png"),
      "Oska Samborska",
      "Local Austria",
      "Yesterday",
      ` Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
    )
  );

  listOfTestim.push(
    new FeedBack(
      require("../../assets/images/osca.png"),
      "Oska Samborska",
      "Local Austria",
      "Yesterday",
      ` Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
    )
  );

  listOfTestim.push(
    new FeedBack(
      require("../../assets/images/osca.png"),
      "Oska Samborska",
      "Local Austria",
      "Yesterday",
      ` Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas.
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.`
    )
  );

  listOfTestim.push(
    new FeedBack(
      require("../../assets/images/ava_default.svg"),
      "Samborska Oska",
      "Local Austria",
      "Yesterday",
      ` The best online zoo I’ve met. My son delighted very much
      ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The
      best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is
      one jf the ways to instill a love for animals.<br>
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo
      is one jf the ways to instill a love for animals.The best online zoo I’ve met.<br>
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo
      is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son
      delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love
      for animals.`
    )
  );
};

currentValue = 0;

// сдввигать на определенное количество влево и вправо
document.addEventListener("DOMContentLoaded", () => {
  initArrTestim();

  const testim = document.querySelector(".testimonials .cards");
  listOfTestim.forEach((card) => {
    const currCard = cardTestDraw(card);
    testim.appendChild(currCard);
    currCard.addEventListener("click", (e) => showPopup(e, card));
  });
  const slider = document.querySelector(".slider");

  let gap = 30;
  let sliderMax = 8;
  if (window.matchMedia("(max-width: 1440px)").matches) {
    sliderMax = 8;
    slider.max = sliderMax;
    // gap = 15;
  } else {
    sliderMax = 7;
    slider.max = sliderMax;
  }
  if (window.matchMedia("(max-width: 999px)").matches) {
    testim.style.transform = "traslateX(0)";
  }

  let prevVal = 0;
  slider.addEventListener("input", (e) => {
    let currValue = e.target.value;
    const wTestim = testim.clientWidth;
    const wParent = testim.parentElement.clientWidth;

    const wCardWidth = testim.querySelector(".card").offsetWidth + gap;

    // alert(wCardWidth);
    testim.style.transform = `translateX(-${Math.round(
      currValue * wCardWidth
    )}px)`;
    prevVal = currValue;
  });
  document
    .querySelector(".popup__close")
    .addEventListener("click", handleClose);
});
