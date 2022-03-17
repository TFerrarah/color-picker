const body = document.querySelector('body');
const form = document.querySelector('form');
const customHex = document.querySelector('input[name=hex]')
customHex.value = ''; //Clear input

function changeBodyColor(c) {
    body.style.background = c;
}

form.addEventListener('submit', (e) =>{
    e.preventDefault() //Prevents default form submit behaviour aka prevents page reload
    const selectedColor = document.querySelector('input[name=color]:checked'); // this indicates the selected radio buttons
    //Check if user has typed custom hex
    if (customHex.value) {
        //Check if hex value is valid using RegEx expression
        /*  Check if string contains numbers from 0 to 9 [0-9]
            or letters from A to F (ignoring casing) [A-F]
            and it's length is 3 [ {3} ]
            and it's repeated 1 or 2 times [ {1,2} ]
        */
        if (/^([0-9A-F]{3}){1,2}$/i.test(customHex.value)) { // Source: https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
            changeBodyColor('#' + customHex.value);
        }
    } else { //Else check the radio buttons
        changeBodyColor('var(--'+selectedColor.id+')');
    }
})