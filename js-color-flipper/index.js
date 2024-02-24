const colors = ["green", "red", "rgba(12, 44, 51, 123)", "#f1f4f9"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    console.log("Changing bg");

    // get randome no. between 0 and 3
    const randomNum = getRandonNum();
    console.log(randomNum);

    document.body.style.backgroundColor = colors[randomNum];
    color.innerText = colors[randomNum];
});

function getRandonNum() {
    return Math.floor(Math.random() * colors.length);
    // random() gives random no. from 0 to 0.99999
}
