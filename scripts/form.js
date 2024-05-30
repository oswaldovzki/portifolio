// Open Forms
const modalForms = document.querySelector('.contact-modal');
const openFormBtn = document.getElementById('openform')

openFormBtn.addEventListener('click', showForm)
function showForm(){
    modalForms.classList.remove("contact-modal-hide");
}

//Submit and Close Forms

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formInput = document.querySelector('.js-form');

formInput.addEventListener('submit', (e) => {
    e.preventDefault();
    saveFormData();
    clearForm();
})

function saveFormData() {
    const formContact = {   
        "name": nameInput.value,
        "email": emailInput.value,
        "message": messageInput.value
    }

    console.log(formContact)
}

function clearForm() {
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    modalForms.classList.add("contact-modal-hide");
}