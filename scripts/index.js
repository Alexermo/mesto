const buttonPopupOpen = document.querySelector('.profile_edit_button-open');
const popup = document.querySelector('.popup');
const buttonPopupClose = document.querySelector('.popup__close-icon');
console.log(buttonPopupClose);

const togglePopupState = function(popupToToggle) {popupToToggle.classList.toggle('popup__opened')}

buttonPopupOpen.addEventListener('click', function()  {
  togglePopupState(popup);
});

buttonPopupClose.addEventListener('click', function()  {
  togglePopupState(popup);
});

popup.addEventListener('click', function(evt) {
  if (evt.target === evt.currentTarget) {
    togglePopupState(popup);
  }
})


