function openModal(text){
  document.getElementById('modal-text').innerText=text;
  document.getElementById('modal').style.display='flex';
}
function closeModal(){
  document.getElementById('modal').style.display='none';
}

document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Спасибо! Ваше сообщение отправлено.');
  e.target.reset();
});
