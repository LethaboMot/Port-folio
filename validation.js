const form = document.querySelector('form');
const email = document.getElementById('email');
const wrong = email.nextElementSibling;
const emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;


window.addEventListener('load', () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    email.className = isValid ? 'OK' : 'not ok';
});

email.addEventListener('input', () => {
    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (isValid) {
        email.className = 'OK';
        wrong.textContent = '';
        wrong.className = 'error';
    } else {
        email.className = 'not ok';
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isValid = email.value.length === 0 || emailRegExp.test(email.value);
    if (!isValid) {
        email.className = 'not ok';
        wrong.textContent = 'Please enter in lowercases';
        wrong.className = 'error active';
    } else {
        email.className = 'OK';
        wrong.textContent = '';
        wrong.className = 'error';
    }
});
