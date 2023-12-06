// deg hace referencia a los grados

const deg = 6;
const horas = document.querySelector('.Hora');
const minutos = document.querySelector('.Minuto');
const segundos = document.querySelector('.Segundo');

setInterval(() => {
    let tiempo = new Date();
    let hr = tiempo.getHours() * 30 + tiempo.getMinutes() / 12;
    let min = tiempo.getMinutes() * deg + tiempo.getSeconds() / 60;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${hr}deg)`;
    minutos.style.transform = `rotate(${min}deg)`;
    segundos.style.transform = `rotate(${seg}deg)`;
})