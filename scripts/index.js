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


// // Находим форму в DOM
// let formElement = // Воспользуйтесь методом querySelector()
// // Находим поля формы в DOM
// let nameInput = document.querySelector()
// let jobInput = document.querySelector()

// // Обработчик «отправки» формы, хотя пока
// // она никуда отправляться не будет
// function handleFormSubmit (evt) {
//     evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//                                                 // Так мы можем определить свою логику отправки.
//                                                 // О том, как это делать, расскажем позже.

//     // Получите значение полей jobInput и nameInput из свойства value

//     // Выберите элементы, куда должны быть вставлены значения полей

//     // Вставьте новые значения с помощью textContent
// }

// // Прикрепляем обработчик к форме:
// // он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', handleFormSubmit);


