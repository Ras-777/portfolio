// Слайдер
let slideIndex = 0;
const slides = document.querySelectorAll('.slider-item');
function showSlide(i){
  if(i>=slides.length) slideIndex=0;
  if(i<0) slideIndex=slides.length-1;
  document.querySelector('.slider-items').style.transform = 'translateX(' + (-slideIndex*100) + '%)';
}
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
function nextSlide(){ slideIndex++; showSlide(slideIndex); }
function prevSlide(){ slideIndex--; showSlide(slideIndex); }
showSlide(slideIndex);

// Калькулятор
document.getElementById('calcForm').addEventListener('submit', function(e){
  e.preventDefault();
  const amt = parseFloat(document.getElementById('amount').value);
  if(isNaN(amt) || amt<=0){ document.getElementById('result').innerText="Введите корректное число"; return; }
  const bonus = (amt*0.1).toFixed(2);
  document.getElementById('result').innerText=`Ваш бонус: ${bonus} ₽`;
});

// Форма обратной связи
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Спасибо! Ваше сообщение отправлено.');
  e.target.reset();
});
