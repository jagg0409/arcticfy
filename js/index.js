window.onload = () => {}
const form = document.getElementsByClassName('card');
form.onsubmit = (event) => {
    event.preventDefault();
    const datos = document.getElementById('datos');
const datostext = datos.value;
datos.value = '';

console.log(datostext);

}

