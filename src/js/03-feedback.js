const form = document.querySelector('.feedback-form');
console.log(form);

form.addEventListener('submit', event => {
  form.preventDefault();
});
