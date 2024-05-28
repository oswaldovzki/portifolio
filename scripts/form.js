const nome = document.querySelector('.name');
const email = document.querySelector('.email');
const message = document.querySelector('.message');

addEventListener('submit', e => {
    e.preventDefault
    console.log(
        nome,
        email,
        message
    )
})