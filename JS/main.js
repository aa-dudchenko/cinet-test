const itemsClick = document.querySelectorAll('.item-click');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content')
const close = document.querySelector('.close');
const itemNumber = document.querySelector('.item-number');
const itemImage = document.querySelector('.item-image')


itemsClick.forEach(item => {
  item.addEventListener('click', openModal)
});

modal.addEventListener('click', closeModal)


function openModal(event, image) {
  modal.style.display = "block";
  document.querySelector("body").style.maxHeight = "100vh";
  document.querySelector("body").style.overflow = "hidden";

  // Передача порядкового номера и картинки:
  itemNumber.innerText = event.target.dataset.number;
  itemImage.src = event.target.dataset.image;
}

function closeModal(event) {
  if (event.target === modalContent.parentNode || event.target === close) {
    modal.style.display = "none";
    document.querySelector("body").style.maxHeight = "100%";
    document.querySelector("body").style.overflow = "auto";
  }
};
