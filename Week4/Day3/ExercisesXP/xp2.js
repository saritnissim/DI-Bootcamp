// 🌟 Exercise 5 : Users


// Retrieve the div and console.log it
let div = document.getElementsByTagName('div')[0];
console.log(div)

// Change the name “Pete” to “Richard”.
let lists = document.querySelectorAll('.list')
let firstUl = lists[0];
let pete = firstUl.lastElementChild;
pete.textContent = "Richard"

// // Delete the second <li> of the second <ul>.
let secondUl = lists[1]
let secondLi = secondUl.children[1]
secondLi.remove()

// Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
for (let list of lists) {
    list.firstElementChild.textContent = 'Sarit'
}

// Using Javascript:
// Add a class called student_list to both of the <ul>'s.
for (let list of lists){
    list.classList.add('student_list')
}

// Add the classes university and attendance to the first <ul>.
firstUl.classList.add('university', 'attendance')

// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
div.style.backgroundColor = 'lightblue'

// Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
secondUl.lastElementChild.style.display = 'none'

// // Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
let richard = firstUl.children[1]
richard.style.border= '2px solid black'

// // Change the font size of the whole body.
document.body.style.fontSize = '16px'; // Adjust the value as needed


// // Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).