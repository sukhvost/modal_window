function createModal(header, content, footer) {
    document.body.style.overflow = 'hidden';
    let layer = document.createElement('div');
    let modal = document.createElement('div');
    modal.classList.add('my_modal')
    let closeModal = document.createElement('div');
    let closeContent = 'X';

    layer.classList.add('layer');
    closeModal.classList.add('my_modal_close');
    closeModal.innerHTML = closeContent;

    modal.append(closeModal);




    layer.append(modal);
    document.body.append(layer);
}

function closeModal() {
    let layer = document.querySelector('.layer');
    document.body.removeChild(layer);
    document.body.style.overflow = 'auto';
}



document.body.addEventListener('click', function(event) {
    let target = event.target;
    if (target.classList.contains('btn_1')) {
        createModal()
        console.log(1);
    } else if (target.classList.contains('btn_2')) {
        console.log(2);
    } else if (target.classList.contains('btn_3')) {
        console.log(3);
    } else if (target.classList.contains('my_modal_close')) {
        console.log(4);
        closeModal();
    }
});