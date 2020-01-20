var form = document.querySelector('.form');
form.style.display = 'none';
document.querySelector('.search-btn').addEventListener('click', function() {
  if(form.style.display === 'none') {form.style.display = 'block';}
  else form.style.display = 'none';
});
