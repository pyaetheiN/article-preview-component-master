const cardUser = document.querySelector('.card__user');
const cardBtn = document.querySelectorAll('.card__btn');

cardBtn.forEach(n => n.addEventListener('click', () => {
  cardUser.classList.toggle('active');
}));