const modal = document.querySelector("#modal");
const openButton = document.querySelector(".subscribe_input_button");
const closeButton = document.querySelector(".modal_ok_button");


function openModal(){
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
}
function closeModal(){
    modal.style.display = 'none';
}
window.onclick = function (event){
    if (event.target == modal){
        closeModal();
    }
}

openButton.addEventListener('click',openModal)
closeButton.addEventListener('click',closeModal)