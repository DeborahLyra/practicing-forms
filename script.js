const inputForm = document.querySelectorAll('.input-form');
const button = document.querySelector('.btn');
const obrigatorio = document.querySelectorAll('.obrigatorio');


button.addEventListener('click', (event) => {
   event.preventDefault()

   inputForm.forEach((element, i) => {
      if (element.value !== '') {
         inputForm[i].classList.add('correct')
      } else {
         inputForm[i].classList.add('notCorrect')
         obrigatorio[i].classList.add('showMessage')
      }
   });

});


/*
Com For

 button.addEventListener('click', (event) => {
    event.preventDefault()

   for (let i = 0; i < inputForm.length; i++){
   if (inputForm[i].value !== ''){
       inputForm[i].classList.add('correct')
    }else {
       inputForm[i].classList.add('notCorrect')
       obrigatorio[i].classList.add('showMessage')
   }
  }
 });
*/