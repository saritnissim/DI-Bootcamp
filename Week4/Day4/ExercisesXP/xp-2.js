// Retrieve the form and console.log it.
const form = document.querySelector('form');
console.log(form)

// Retrieve the inputs by their id and console.log them.
const fname = document.getElementById('fname')
console.log(fname)
const lname = document.getElementById('lname')
console.log(lname)
const submit = document.getElementById('submit')
console.log(submit)

// Retrieve the inputs by their name attribute and console.log them.
const firstnameByName = document.getElementsByName('firstname');
const lastnameByName = document.getElementsByName('lastname');
console.log(firstnameByName);
console.log(lastnameByName);

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
form.addEventListener('submit', (e) =>{
    e.preventDefault()

    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();

    if (!fnameValue || !lnameValue) {
        alert('Please fill out both fields!');
        return;
      }
    
    // Create <li> elements for each input value
    const usersAnswerList = document.querySelector('.usersAnswer');
    const fnameLi = document.createElement('li');
    fnameLi.textContent = `First name: ${fnameValue}`;

    const lnameLi = document.createElement('li');
    lnameLi.textContent = `Last name: ${lnameValue}`;

    // Append the <li> elements to the <ul>
    usersAnswerList.appendChild(fnameLi);
    usersAnswerList.appendChild(lnameLi);

    
})
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>