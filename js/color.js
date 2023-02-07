// Отслеживаем клик на странице
window.addEventListener('click',function(e){
    //Счетчик Цвет: Выберите цвет
    let counter;
    // Три цвета на выбор
    const left = this.document.querySelector('[data-action="left"]');
    const center = this.document.querySelector('[data-action="center"]');
    const right = this.document.querySelector('[data-action="right"]');
    // Отображение в counter цвета
    if(e.target.dataset.action === 'left' || e.target.dataset.action === 'center' 
    || e.target.dataset.action === 'right'){
        const counterWrapper = e.target.closest('.color-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');

        // Разблокировка кнопки добавления в карзину
        const card = e.target.closest('.card');
        const btn = card.querySelector('[data-cart]');
        btn.removeAttribute("disabled");
    }
    // При нажатии на опр. цвет добавляется этот цвет
    if(e.target.dataset.action === 'left'){
        counter.innerText = left.innerText;
    }
    if(e.target.dataset.action === 'center'){
        counter.innerText = center.innerText;
    }
    if(e.target.dataset.action === 'right'){
        counter.innerText = right.innerText;
    } 
    
});