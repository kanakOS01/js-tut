// local reviews data
const reviews = [
    {
        id: 0,
        name: 'Kanak Tanwar',
        job: 'ML ENGINEER',
        img: 'https://img.icons8.com/officel/16/person-male.png',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis odit ipsum porro dicta dolorem? Praesentium veniam sapiente numquam molestiae tempora! ",
    },
    {
        id: 1,
        name: 'Susan Smith',
        job: 'WEB DEVELOPER',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'WEB DESIGNER',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'Peter Jones',
        job: 'INTERN',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'Bill Anderson',
        job: 'THE BOSS',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];

function getRandomIndex() {
    return Math.floor(Math.random() * reviews.length);
}

function updateItem(person) {
    const item = reviews[person];

    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;


// load initial item
window.addEventListener('DOMContentLoaded', function() {
    console.log('Doc loaded');
    
    updateItem(currentItem);
});

nextBtn.addEventListener('click', function() {
    console.log('next item loaded');
    
    if (currentItem >= reviews.length - 1) {
        currentItem = 0;
    } else {
        currentItem++;
    }

    updateItem(currentItem);
});

prevBtn.addEventListener('click', function() {
    console.log('next item loaded');
    
    if (currentItem == 0) {
        currentItem = reviews.length - 1;
    } else {
        currentItem--;
    }

    updateItem(currentItem);
});

randomBtn.addEventListener('click', function () {
    console.log('Generating Random Review');

    currentItem = getRandomIndex();

    updateItem(currentItem);
});