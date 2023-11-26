var images = ['images/danceman1.png', 'images/danceman2.png', 'images/danceman3.png', 'images/danceman4.png', 'images/danceman5.png', 'images/danceman6.png', 'images/danceman7.png', 'images/danceman8.png', 'images/danceman9.png', 'images/danceman10.png', 'images/danceman11.png'];
var counter = 0;

document.querySelector('.grid-item').addEventListener('click', function () {
    counter = (counter + 1) % images.length; 
    this.src = images[counter];
});
