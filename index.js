const $ = document.querySelector.bind(document);
const hamburger = $(".hamburger");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle('open');
    const dialog = $('dialog.modal');
    dialog.showModal();
});

const buttonClose = $('.close-button');
buttonClose.addEventListener('click', ()=> {
    const dialog = buttonClose.closest('dialog');
    dialog.close();
})