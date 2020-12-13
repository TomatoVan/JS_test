// ДЛЯ ФОРМЫ:
//объявляем переменные, в которые записываем DOM-элементы
let contactBtn = document.querySelector('.contact_btn'); 
let contactWrapper = document.querySelector('.contact_wrapper');
let contactBlock = document.querySelector('.contact_block');

//ставим обработчик на клик
contactBtn.onclick = (e) => {
e.preventDefault();
contactBlock.style.display = 'block';
contactWrapper.style.display = 'none';
}