const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function() {
    console.log('changing color');

    const hexCode = getHexCode();

    color.innerText = hexCode;
    document.body.style.backgroundColor = hexCode;
});

// hex color code has 6 digits 
// they can have combo of the hexadecimal digits

function getHexCode() {
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode += hex[getRandonNum()];
    }

    return hexCode;
}

function getRandonNum() {
    return Math.floor(Math.random() * hex.length);
}