// Your code goes here
//MouseOver Logo Title
let logoHeading = document.querySelector('.logo-heading');
logoHeading.addEventListener('mouseover', () => {

    logoHeading.style.color = 'red';
});

logoHeading.addEventListener('mouseleave', () => {
    logoHeading.style.color = 'black';
});

//Dblclick Main Image
let mainImg = document.querySelector('header img');
mainImg.addEventListener('dblclick', () => {
      mainImg.style.transform = 'scale(1.5)';
      //With Help from Brad Petersen
      //Brings the image back to the original size.
      setTimeout( () => {
          mainImg.style.transform = 'scale(1.0)';
      }, 500);
});

//KeyDown - H2 translate

// let header2 = document.querySelector('.content-section .text-content h2');
// header2.addEventListener('keydown', () => {
//     header2.style.transform = 'translateX(200px)';
//     //header2.style.transition = 'transform: 0.5s ease-in';

//     setTimeout( () => {
//         header2.style.transform = 'translateX(-200px)';
//     }, 1000);
// }); //DIDN"T WORK

let img2 = document.querySelector('.img-content');
// console.log(img2);
img2.addEventListener('keydown', () => {
    img2.style.transform = 'translateX(200px)';
    //img2.style.transition = 'transform: 0.5s ease-in';

    setTimeout( () => {
        img2.style.transform = 'translateX(-200px)';
    }, 1000);
});