const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

// RICHIAMO GLI ELEMENTI 

const myCarouselImages = document.querySelector('.my-carousel-images');
const myThumbnails = document.querySelector('.my-thumbnails');
let counterImages = 0;

// RESET ELEMENTI 
myCarouselImages.innerHTML = '';
myThumbnails.innerHTML = '';


images.forEach((elemento,indice)=>{
    myCarouselImages.innerHTML += `
    <div class="my-carousel-item">
    <img class="img-fluid" src="${elemento.url}" alt="${elemento.title}">
    <div class="item-description px-3">
    <h2>${elemento.title}</h2>
    <p>${elemento.description}</p>
    </div>
    </div>
    `;
    myThumbnails.innerHTML += `
    <div class="my-thumbnail">
    <img class="img-fluid" src="${elemento.url}" alt="Thumbnail of ${elemento.title}picture">
    </div>
    `;
})

// RICHIAMO GLI ELEMENTI CREATI NEL CICLO FOREACH PRECENDENTE
const myCarouselItem = document.getElementsByClassName('my-carousel-item');
const myThumbnail = document.getElementsByClassName('my-thumbnail');

// AGGIUNGO LA CLASSE ACTIVE AL PRIMO ELEMENTO 
myCarouselItem[counterImages].classList.add('active');
myThumbnail[counterImages].classList.add('active');


// CREO I BOTTONI PREV E NEXT 
myThumbnails.innerHTML += `
<div class="my-previous position-absolute">
    <span class="my-prev-hook"></span>
</div>
`;

myThumbnails.innerHTML += `
<div class="my-next position-absolute">
    <span class="my-next-hook"></span>
</div>
`;

const btnPrev = document.querySelector('.my-prev-hook');
const btnNext = document.querySelector('.my-next-hook');

btnPrev.addEventListener('click', function(){
    prev();
})

btnNext.addEventListener('click', function(){
    next();
})




// BONUS 1

const allThumbs = document.querySelectorAll('.my-thumbnail')

allThumbs.forEach((elemento, indice)=>{
    
    elemento.addEventListener('click', ()=> {
        myCarouselItem[counterImages].classList.remove('active');
        myThumbnail[counterImages].classList.remove('active');

        counterImages = indice;

        myCarouselItem[counterImages].classList.add('active');
        myThumbnail[counterImages].classList.add('active');
    })
})

// BONUS 2

const autoPlay = () => {
    myCarouselItem[counterImages].classList.remove('active');
    myThumbnail[counterImages].classList.remove('active');
    
    counterImages++;
    
    if (counterImages > images.length-1){
        counterImages = 0;
    }
    
    myCarouselItem[counterImages].classList.add('active');
    myThumbnail[counterImages].classList.add('active');
    
}

let autoPlayLoop = setInterval (autoPlay, 3000);






// FUNZIONI PER BOTTONI 
function prev(){
    myCarouselItem[counterImages].classList.remove('active');
    myThumbnail[counterImages].classList.remove('active');

    counterImages--;
    
    if (counterImages < 0){
        counterImages = images.length-1;
    }
    myCarouselItem[counterImages].classList.add('active');
    myThumbnail[counterImages].classList.add('active');
}

function next(){
    myCarouselItem[counterImages].classList.remove('active');
    myThumbnail[counterImages].classList.remove('active');

    counterImages++;

    if (counterImages > images.length-1){
        counterImages = 0;
    }
    myCarouselItem[counterImages].classList.add('active');
    myThumbnail[counterImages].classList.add('active');
    
}