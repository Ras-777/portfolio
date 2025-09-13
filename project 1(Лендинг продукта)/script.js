// Carousel
let index=0;
const slides=document.querySelectorAll('.carousel-item');
function showSlide(i){
  if(i>=slides.length) index=0;
  if(i<0) index=slides.length-1;
  document.querySelector('.carousel-items').style.transform='translateX('+(-index*100)+'%)';
}
document.querySelector('.next').addEventListener('click',()=>{index++;showSlide(index);});
document.querySelector('.prev').addEventListener('click',()=>{index--;showSlide(index);});
showSlide(index);

// Order button
document.getElementById('orderBtn').addEventListener('click',()=>{alert('Спасибо! Мы свяжемся с вами.');});

// Contact form
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  alert('Спасибо! Ваше сообщение отправлено.');
  e.target.reset();
});
