const buttons = document.querySelectorAll(".number");
const gashveba = document.querySelector(".sbm");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("selected");
      button.style.color = "#7c8798";
    });
    btn.classList.add("selected");
    btn.style.color = "white";
  });
});

gashveba.addEventListener("click", () => {
  const selectedButton = document.querySelector(".selected");
  if (selectedButton) {
    const cardContent = document.querySelector(".card");
    cardContent.innerHTML = "";

    const img = document.createElement("img");
    img.src = "Online payment_Two Color(1) 2.png";
    cardContent.appendChild(img);
    img.classList.add("img");

    const div = document.createElement("div");
    div.classList.add("divi");
    cardContent.appendChild(div);

    const shepaseba = document.createElement("h1");
    shepaseba.innerText = `You selected ${selectedButton.innerText} out of 5`;
    shepaseba.classList.add("shepaseba");
    div.appendChild(shepaseba);

    const ty = document.createElement("h1");
    ty.innerText = "Thank you";
    ty.classList.add("madloba");
    cardContent.appendChild(ty);

    const p = document.createElement("p");
    p.innerText =
      "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
    p.classList.add("para");
    cardContent.appendChild(p);
  }
});
