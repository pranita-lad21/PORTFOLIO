const scriptURL = 'https://script.google.com/macros/s/AKfycby948N6Mf3VqmY8nujNT9gmtqNqVtudpjP1D2zcg1mTKqZp--BOmZGC25kz6-uuEhJxQQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent sucessfully"
      sentTimeout(function(){
          msg.innerHTML= ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
