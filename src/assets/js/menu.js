export const toggleShadow = () => {
  const shadow = document.querySelector(".shadow");
  const body = document.querySelector(".body");
  shadow.classList.toggle("body_shadow");
  body.classList.toggle("active");
  console.log("shadow");
};

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".hamburger");

  const header = document.querySelector(".header");

  const handleShadow = () => {
    header.classList.toggle("active");
    menuBtn.classList.toggle("active");
    const shadow = document.querySelector(".body_shadow");

    toggleShadow();
    console.log("click");
  };

  const addMenu = (e) => {
    e.stopPropagation();
    header.classList.toggle("active");
    menuBtn.classList.toggle("active");
    console.log("start");
    toggleShadow();
    const shadow = document.querySelector(".body_shadow");
    console.log(shadow);
    if (shadow) {
      console.log("sh");
      shadow.addEventListener("click", handleShadow, { once: true });
    }
  };

  menuBtn.addEventListener("click", addMenu);
});
