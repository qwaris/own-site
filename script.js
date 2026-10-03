const head = document.querySelector('.head');      // ищем хед

function checkScroll() {             //Задаем функцию ждать скрол
    head.classList.toggle('scrolled', window.scrollY > 0);
}



window.addEventListener('scroll', checkScroll);

checkScroll()

