// функция создания модального окна
// которая принимает параметром контент этого окна

function createModal(content) {
    // запрещаем прокрутку body
    document.body.style.overflow = 'hidden';

    // создаем элемент layer и присваеваем класс
    let layer = document.createElement('div');
    layer.classList.add('layer');

    // создаем элемент modal и присваеваем класс
    let modal = document.createElement('div');
    modal.classList.add('my_modal');

    // создаем кнопку закрытия для modal
    let closeModal = document.createElement('div');
    let closeContent = 'X';
    closeModal.classList.add('my_modal_close');
    closeModal.innerHTML = closeContent;

    // аппендим элементы в modal
    modal.append(closeModal, content);


    // аппендим modal в layer
    layer.append(modal);
    document.body.append(layer);
}

// функция закрытия и уничтожения модального окна

function closeModal() {
    // получаем элемент layer
    let layer = document.querySelector('.layer');
    // удаляем этот элемент 
    document.body.removeChild(layer);
    // возвращаем прокрутку body
    document.body.style.overflow = 'auto';
}


// слушатель для событий для разных элементов страницы

document.body.addEventListener('click', function(event) {
    let target = event.target;
    if (target.classList.contains('btn_1')) {
        let el = document.createElement('iframe');
        el.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2216.292345721938!2d43.84625531610299!3d56.25573296055739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414e2bb812f0c331%3A0xa45d72c24a7f098!2z0YPQuy4g0JrQvtC80YHQvtC80L7Qu9GM0YHQutCw0Y8sIDQ00JEsINCd0LjQttC90LjQuSDQndC-0LLQs9C-0YDQvtC0LCDQndC40LbQtdCz0L7RgNC-0LTRgdC60LDRjyDQvtCx0LsuLCA2MDMxMzg!5e0!3m2!1sru!2sru!4v1586621857971!5m2!1sru!2sru');

        createModal(el);
        console.log(1);
    } else if (target.classList.contains('btn_2')) {
        let div = document.createElement('div');
        let el = document.createElement('input');
        let btn = document.createElement('button');
        el.setAttribute('placeholder', 'Your e-mail..');
        btn.innerHTML = 'ok';
        div.append(el, btn);
        createModal(div);

        console.log(2);
    } else if (target.classList.contains('btn_3')) {
        window.scrollTo(0, 0);
        console.log(3);
    } else if (target.classList.contains('my_modal_close')) {
        console.log(4);
        closeModal();
    }
});