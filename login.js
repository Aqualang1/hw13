const login = document.getElementById('login');
const password = document.querySelector('#password');
const  btn = document.querySelector("#btn");
const panel = document.querySelector('.panel');
const stamp = document.createElement('div');
let n = 5;

function counter() {
    stamp.textContent = `you will be redirected after ${n} sec`;
    stamp.classList.add('stamp');
    panel.appendChild(stamp);
    n--;
    if (n >= 0) {
        return setTimeout(counter, 1000);
    } else {
        window.location.href = 'profile.html';
    }
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
     if (login.value === '' || password.value.length === 0) { //то був експеримент. Коли я запевнився що обидва методи перевірки повертають одне і те саме вирішив залишити обидва, для демонстрації цього ефекту. 
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