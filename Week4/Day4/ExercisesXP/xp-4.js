
const form = document.getElementById('MyForm')
document.addEventListener('submit', calculateVolume)


function calculateVolume(e){
    e.preventDefault(); //Stops page from reloading

    const radius = parseFloat(document.getElementById("radius").value);
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius.");
        return;
    }
    
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    document.getElementById('volume').value = volume
}