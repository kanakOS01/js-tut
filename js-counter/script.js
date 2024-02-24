const counter = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
// for all the buttons we can also use querySelectorAll so that everything is stored in a single array


resetBtn.addEventListener("click", function() {
    console.log("resetting counter");

    counter.innerText = 0;
    counter.style.color = "rgb(190, 190, 190)";
});

decreaseBtn.addEventListener('click', function () {
    console.log("decreasing counter");

    counter.innerText--;

    if (counter.innerText == 0) {
        counter.style.color = "rgb(190, 190, 190)";
    } else if ( counter.innerText < 0) {
        counter.style.color = "rgba(204, 0, 0, 0.918)";
    } else {
        counter.style.color = "rgba(0, 201, 67, 0.918)";
    }
});

increaseBtn.addEventListener('click', function () {
    console.log("increasing counter");
    
    counter.innerText++;

    if (counter.innerText == 0) {
        counter.style.color = "rgb(190, 190, 190)";
    } else if ( counter.innerText < 0) {
        counter.style.color = "rgba(204, 0, 0, 0.918)";
    } else {
        counter.style.color = "rgba(0, 201, 67, 0.918)";
    }
});



// let count = 0;

// const value = document.querySelector('#counter');
// const btns = document.querySelectorAll('.btn');

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function(e) {
//         const btnType = e.currentTarget.classList;
        
//         if (btnType.contains("decrease")) {
//             count--;
//         } else if (btnType.contains("incrase")) {
//             count++;
//         } else {
//             count = 0;
//         }

//         if (count > 0) {
//             value.style.color = "rgba(0, 201, 67, 0.918)";
//         } else if (count < 0) {
//             counter.style.color = "rgba(204, 0, 0, 0.918)";
//         } else {
//             counter.style.color = "rgb(190, 190, 190)";
//         }
        
//     });
// });

// debug using console.log

