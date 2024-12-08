let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

let openModal = document.querySelector("#profileSharing");
openModal.addEventListener("click", () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
});

let closeModal = document.querySelector(".close");
closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
});
