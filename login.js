let login = document.getElementById('login');
let password = document.querySelector('#password');
let btn = document.querySelector("#btn");
let panel = document.querySelector('.panel');
let stamp = document.createElement('div');
let n = 5;

function counter() {
    stamp.textContent = `you will be redirected after ${n} sec`;
    stamp.classList.add('stamp');
    panel.appendChild(stamp);
    n--;
    if (n > 0) {
        return setTimeout(counter, 1000);
    } else {
        window.location.href = 'profile.html';
    }
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (login.value === '' || password.value.length === 0) {
        stamp.textContent = 'Please, enter valid value';
        stamp.classList.add('stamp');
        panel.appendChild(stamp);
        login.onclick = (event) => panel.removeChild(stamp);
        password.onclick = (event) => panel.removeChild(stamp);
    } else {
        document.getElementById("loader").style.display = "block";
        counter();
        console.log(`'your login: ' ${login.value}, 'your password: ' ${password.value}`)
    }
})