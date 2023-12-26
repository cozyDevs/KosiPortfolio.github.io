const modalEngine = document.querySelector("#modalEngine");
const modalSeedling = document.querySelector("#modalSeedling");
const modalGrave = document.querySelector("#modalGrave");
const modalFOD = document.querySelector("#modalFOD");
const modalResume = document.querySelector("#modalResume");






const openModalEngine = document.querySelector(".open-button-Engine");
const closeModalEngine = document.querySelector(".close-button-Engine");
const openModalSeedling = document.querySelector(".open-button-Seedling");
const closeModalSeedling = document.querySelector(".close-button-Seedling");
const openModalGrave = document.querySelector(".open-button-grave");
const closeModalGrave = document.querySelector(".close-button-grave");
const openModalFOD = document.querySelector(".open-button-FOD");
const closeModalFOD = document.querySelector(".close-button-FOD");
const openModalResume = document.querySelector(".open-button-Resume");
const closeModalResume = document.querySelector(".close-button-Resume");

openModalEngine.addEventListener("click", () => {
  modalEngine.showModal();
  modalEngine.scrollTop = 0;
  modalEngine.classList.remove("hide-modal");
  modalEngine.classList.add("show-modal");
  
 
});

closeModalEngine.addEventListener("click", () => {
  modalEngine.close();
  modalEngine.classList.remove("show-modal");
  modalEngine.classList.add("hide-modal");

});

openModalSeedling.addEventListener("click", () => {
  modalSeedling.showModal();
  modalSeedling.scrollTop = 0;
  modalSeedling.classList.remove("hide-modal");
  modalSeedling.classList.add("show-modal");
  
 
});

closeModalSeedling.addEventListener("click", () => {
  modalSeedling.close();
  modalSeedling.classList.remove("show-modal");
  modalSeedling.classList.add("hide-modal");

});

openModalGrave.addEventListener("click", () => {
  modalGrave.showModal();
  modalGrave.scrollTop =0;
  modalGrave.classList.remove("hide-modal");
  modalGrave.classList.add("show-modal");
})

closeModalGrave.addEventListener("click", () => {
 modalGrave.close();
 modalGrave.classList.remove("show-modal");
  modalGrave.classList.add("hide-modal");
})
openModalFOD.addEventListener("click", () => {
  modalFOD.showModal();
  modalFOD.scrollTop =0;
  modalFOD.classList.remove("hide-modal");
  modalFOD.classList.add("show-modal");
})

closeModalFOD.addEventListener("click", () => {
 modalFOD.close();
 modalFOD.classList.remove("show-modal");
  modalFOD.classList.add("hide-modal");
})

openModalResume.addEventListener("click", () => {
  modalResume.showModal();
  modalResume.scrollTop =0;
  modalResume.classList.remove("hide-modal");
  modalResume.classList.add("show-modal");
})

closeModalResume.addEventListener("click", () => {
 modalResume.close();
 modalResume.classList.remove("show-modal");
  modalResume.classList.add("hide-modal");
})







/*
 Mobile - 320x 480
 Tabs - 481 x 768
 laptops - 769 x 1024
 Desktops - Normal // 1025 x 1200
 Extra Large / TV - 1201 >

*/
