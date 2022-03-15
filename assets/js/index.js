const body = document.getElementsByTagName('body')[0];

function changeBodyColor(c) {
    body.style.background = c;
}

const form = document.querySelector('form');
const customHex = document.querySelector('input[name=hex]')
customHex.value = '';

form.addEventListener('submit', (e) =>{
    e.preventDefault() //Prevents default form submit behaviour aka prevents page reload
    const selectedColor = document.querySelector('input[name=color]:checked');

    //Check if user has typed custom hex
    if (customHex.value) {
        //Check if hex value is valid
        if (/^#([0-9A-F]{3}){1,2}$/i.test('#'+customHex.value)) { // Source: https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
            changeBodyColor('#' + customHex.value);
        }
    } else {
        console.log(selectedColor);
        changeBodyColor('var(--'+selectedColor.id+')');
    }
})