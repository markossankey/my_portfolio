console.log('linked')
fname = document.getElementById('fname')
lname = document.getElementById('lname')
email = document.getElementById('email')
message = document.getElementById('message')

fname.addEventListener('change', (event) => {
  regex = /^[a-zA-Z\-]+$/g
  value = fname.value

  if (value == '') {
    classAttr += ' is-invalid'
    let classAttr = fname.getAttribute('class')
    fname.setAttribute('class', classAttr)
    console.log(classAttr)
  }
  else if (!regex.test(value)) {
    console.log('invalid name')
  } else {
    let classAttr = fname.getAttribute('class')
    classAttr += ' is-valid'
    fname.setAttribute('class', classAttr)
  }
})