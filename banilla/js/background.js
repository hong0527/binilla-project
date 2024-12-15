const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]


function chagneImg(){
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const imgsorce = `img/${chosenImage}`;

    document.body.style.backgroundImage = `url(${imgsorce})`;
}

chagneImg();

