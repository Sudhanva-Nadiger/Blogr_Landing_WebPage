const $ = document.querySelector.bind(document);
const hamburger = $(".hamburger");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle('open');
    const dialog = $('dialog.modal');
    dialog.showModal();
    $('body').classList.add('modal-shown');
});

const buttonClose = $('.close-button');
buttonClose.addEventListener('click', ()=> {
    const dialog = buttonClose.closest('dialog');
    dialog.close();
    $('body').classList.remove('modal-shown');
})