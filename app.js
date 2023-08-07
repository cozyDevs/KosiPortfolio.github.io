const modal = document.querySelector("#modal");
const modalGrave = document.querySelector("#modalGrave");

const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const openModalGrave = document.querySelector(".open-button-grave");
const closeModalGrave = document.querySelector(".close-button-grave");

openModal.addEventListener("click", () => {
  modal.showModal();
  modal.scrollTop = 0;
 
});

closeModal.addEventListener("click", () => {
  modal.close();

});

openModalGrave.addEventListener("click", () => {
  modalGrave.showModal();
  modalGrave.scrollTop =0;
})

closeModalGrave.addEventListener("click", () => {
 modalGrave.close();
})
