



const container = document.querySelector('#container');
const bulb = document.querySelector('#bulb-img');


bulb.addEventListener('click', () => {
    if(bulb.src.match('On')){
        bulb.src = './assets/bulbOff.jpg';
        bulb.style.width = '300px';
        bulb.style.marginLeft='35%';
        bulb.style.marginTop='5vh';
    } else {
        bulb.src = './assets/bulbOn.jpg';
        bulb.style.width = '450px';
        bulb.style.marginLeft='30.25%';
        bulb.style.marginTop='5vh';
    }
    
});

