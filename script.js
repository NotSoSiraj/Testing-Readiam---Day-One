let BeLogin = document.getElementById('BeLogin');
let formWrapper = document.querySelector('.formWrapper');
let SignUp = document.getElementById('beSignup');
let secondFormWrapper = document.querySelector('.SecondformWrapper');

BeLogin.addEventListener('click', function(){
  formWrapper.classList.toggle('Login-page');
  secondFormWrapper.classList.remove('Signup-page');
});

SignUp.addEventListener('click', function(){
  secondFormWrapper.classList.toggle('Signup-page');
  formWrapper.classList.remove('Login-page');
  
  if (formWrapper.classList.contains('Login-page')) {
    formWrapper.classList.remove('Login-page');
  }
});
