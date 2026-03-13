const btn = document.querySelector('#submitbtn')

btn.addEventListener("click", function(event) {
    event.preventDefault();

    const email = document.querySelector('#email').value;
    const password = document.querySelector('#senha').value;
    const header = document.querySelector('h1');
    const name = document.querySelector('#name').value;

    if (email && password) {
        header.innerHTML = "Login de  " + name + "  " + "realizado com sucesso!";
    } else {
        header.innerHTML = "Por favor, preencha todos os campos.";
    }
})