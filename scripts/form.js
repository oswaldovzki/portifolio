// Open Forms
const modalForms = document.querySelector('.contact-modal');
// const openFormBtn = document.getElementById('openform');

openFormBtn.addEventListener('click', showForm)

function showForm(){
    modalForms.classList.remove("contact-modal-hide");
}

function closeModal() {
    modalForms.classList.add("contact-modal-hide");
}

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const formInput = document.querySelector('.js-form');
const xmark = document.querySelector('.xmark');

formInput.addEventListener('submit', (e) => {
    e.preventDefault();
    saveFormData();
    clearForm();
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

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

xmark.addEventListener('click', closeModal);