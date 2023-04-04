let allAmounts;
const handleChangeInput = (e) => {
  if (e.target.value.length < 4) {
    // allAmounts = document.querySelectorAll(".progr__radios .radio");
    const byVal = document.querySelector(
      `input[name="bar"][value="${e.target.value}"]`
    );
    console.log(byVal);
    if (byVal) {
      byVal.checked = true;
    } else {
      document.querySelector('input[name="bar"]:checked').checked = false;
    }
  } else {
    e.target.value = e.target.value.slice(0, -1);
  }
};
const handleChangeRadio = (e) => {
  console.log(e.target.value);
  document.querySelector(".amount__input").value = e.target.value;
};

document.addEventListener("DOMContentLoaded", () => {
  allAmounts = document.querySelectorAll("input[name='bar']");
  const amountInput = document.querySelector(".amount__input");
  allAmounts.forEach((am) => am.addEventListener("click", handleChangeRadio));

  amountInput.addEventListener("keyup", handleChangeInput);
});
