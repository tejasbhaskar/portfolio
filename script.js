const scriptURL = 'https://script.google.com/macros/s/AKfycby_VVN7lsand6cepjY1G9YA1yWTzrMuDqj7SVNDaT60gV8seRc4AI7OHTE1MamUtzo_/exec'
  const form = document.forms['submit-to-google-sheet']
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })